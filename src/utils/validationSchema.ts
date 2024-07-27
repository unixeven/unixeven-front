import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '../constants/regexp';
import { z } from 'zod';

export const formDataSchema = z.object({
  name: z
  .string({ required_error: '*Name is required' })
  .min(1, { message: '*Name is required' })
    .max(50, { message: '*Name can not exceed 50 characters' }),
  email: z
    .string({ required_error: '*Email is required' })
    .min(1, { message: '*Email is required' })
    .regex(EMAIL_REGEX, {
        message: '*Please enter a valid email address',
    }),
  phoneNumber: z
  .string({ required_error: '*Phone number is required' })
  .min(1, { message: '*Phone number is required' })
  .regex(PHONE_NUMBER_REGEX, 
    { message: '*Please enter a valid Phone number' },
  ),
  messageContact: z
  .string({ required_error: '*Massage is required' })
  .min(1, {message: '*Field is required' })
  .max(500)
})
