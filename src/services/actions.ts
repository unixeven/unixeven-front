import { formDataSchema } from "@/utils/validationSchema"

export const createUserMassage = async (formData: FormData) => {
const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      messageContact: formData.get('messageContact') as string,
  }
  
  const result = formDataSchema.safeParse(data);

  if (!result.success) { 
    return {
      message: "validation failed", errors: result.error.format()

    }
  }

  try {
  // const response = await виклик API
  console.log(data)
  // if (!response.ok) {
  //   throw new Error('Failed to send form data')
    // }
    return {
      message: 'Form submitted successfully!'
    }
} catch (error) {
    console.error('Error', error)
    return { message: 'Failed to submit form!'}
}

 }