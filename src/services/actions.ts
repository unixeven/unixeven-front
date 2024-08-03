'use server';

import { DataMessage, Errors } from '@/types/difinitions';
import { formDataSchema } from '@/utils/validationSchema';
import { submitContactForm } from './api';
import { ZodFormattedError } from 'zod';

export const createUserMessage = async (
  prevState: {
    message: string;
    errors: Errors | ZodFormattedError<DataMessage>;
  },
  formData: FormData
) => {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phoneNumber: formData.get('phoneNumber') as string,
    messageContact: formData.get('messageContact') as string,
  };

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    const formattedErrors = result.error.format();
    return {
      message: 'Validation failed',
      errors: formattedErrors,
    };
  }

  try {
    const response = await submitContactForm(data);
    console.log(`response:`, response);

    return {
      message: 'Form submitted successfully!',
      errors: {} as Errors,
    };
  } catch (error) {
    console.error('Error', error);
    return { message: 'Failed to submit form!', errors: {} as Errors };
  }
};
