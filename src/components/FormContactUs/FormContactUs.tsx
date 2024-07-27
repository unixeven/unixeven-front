'use client'
import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import { formSchema } from "@/utils/validationSchema";
import { useFormState } from "react-dom";
import { createUserMassage } from "@/services/actions";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  messageContact: string;
}
const initialState = {
  massage: '',
errors: {},
}

export const FormContactUs = () => {  
  const [state, formAction] = useFormState(createUserMassage, initialState)
  // const [formData, setFormData] = useState<FormData | null>(null)
  // const [errors, setErrors] = useState<Record<string, string>>({})
  // console.log("🚀 ~ FormContactUs ~ errors:", errors) 
  

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget)
  //    const rawFormData: FormData = {
  //     name: data.get('name') as string,
  //     email: data.get('email') as string,
  //     phoneNumber: data.get('phoneNumber') as string,
  //     messageContact: data.get('messageContact') as string,
  //   }
  //    console.log("🚀 ~ handleSubmit ~ rawFormData:", rawFormData)

  //   const validation = formSchema.safeParse(rawFormData)
  //   console.log("🚀 ~ handleSubmit ~ validation:", validation)
    
  //   if (!validation.success) {
  //     const validationErrors: Record<string, string> = {};
  //     validation.error.errors.forEach(error => {
  //       validationErrors[error.path[0]] = error.message;
        
  //      }
  //     )
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   setErrors({})
  //   setFormData(rawFormData)
  //   console.log("🚀 ~ handleSubmit ~ rawFormData:", rawFormData)
    
  //  }

  return(
    <form actions={formAction} className="flex flex-col justify-center items-center relative gap-6 w-full">
      <h2 className="font-montserrat text-[40px]/normal tracking-[1.2px] font-normal text-cobalt dark:text-lightWhite">Contact us</h2>
      <input type="text" name="name" placeholder="Your name" className="form-input" />
      {/* {errors.name && <span className="text-red-500">{errors.name}</span>} */}
      <input type="email" name="email" placeholder="Your email" className="form-input" />
      {/* {errors.email && <span className="text-red-500">{errors.email}</span>} */}
      <input type="tel" name="phoneNumber" placeholder="Phone number" className="form-input" />
      {/* {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>} */}
      <textarea name='messageContact' placeholder="Your Message..." className="form-input min-h-[147px]" />
      {/* {errors.messageContact && <span className="text-red-500">{errors.messageContact}</span>} */}
     <button type="submit" className="btn-submit">Submit</button>
      {/* <button type="submit" className="btn-submit">Submit<buton/> */}
    </form>
  )
};
