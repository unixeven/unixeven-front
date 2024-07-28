'use client';

import { createUserMessage } from '@/services/actions';
import { Errors } from '@/types/difinitions';
import { useFormState } from 'react-dom';
import { Button } from '../Button/Button';

const initialState = {
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
      <label className='w-full relative'>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="form-input"
      />
      {state?.errors && (
        <span className="text-red-500 text-sm italic absolute -bottom-5 left-0">
          {state.errors?.name?._errors[0]}
        </span>
        )}
      </label>
      <label className='w-full relative'>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="form-input"
      />
      {state?.errors && (
        <span className="text-red-500 text-sm italic absolute -bottom-5 left-0">
          {state?.errors?.email?._errors[0]}
        </span>
        )}
      </label>
      <label className='w-full relative'>
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        className="form-input"
      />
      {state?.errors && (
        <span className="text-red-500 text-sm italic absolute -bottom-5 left-0">
          {state?.errors?.phoneNumber?._errors[0]}
        </span>
      )}
      </label>
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
