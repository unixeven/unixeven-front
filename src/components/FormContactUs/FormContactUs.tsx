'use client';

import { createUserMessage } from '@/services/actions';
import { Errors, InitialState } from '@/types/difinitions';
import { useFormState } from 'react-dom';
import { Button } from '../Button/Button';
import { InputForm } from '../InputForm/InputForm';


const initialState: InitialState = {
  message: '',
  errors: {} as Errors,
};

export const FormContactUs = () => {
  const [state, formAction] = useFormState(createUserMessage, initialState);
  

  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center relative gap-6 w-full"
    >
      <h2 className="font-montserrat text-[40px]/normal tracking-[1.2px] font-normal text-cobalt dark:text-lightWhite">
        Contact us
      </h2>
      <InputForm type="text" name="name" placeholder="Your name" state={state} />
      <InputForm type="email" name="email" placeholder="Your email" state={state} />
      <InputForm type="tel" name="phoneNumber" placeholder="Phone number" state={state} />
      <label className='w-full relative'>
      <textarea
        name="messageContact"
        placeholder="Your Message..."
        className="form-input min-h-[147px]"
      />
      {state?.errors && (
        <span className="text-red-500 text-sm italic absolute -bottom-5 left-0">
          {state?.errors?.messageContact?._errors[0]}
        </span>
        )}
      </label>
      
      <Button buttonType="submit" text="Submit" className="btn-submit" handleModal={() => {}} />
    </form>
  );
};
