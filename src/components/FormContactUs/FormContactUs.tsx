'use client';

import { createUserMessage } from '@/services/actions';
import { Errors } from '@/types/difinitions';
import { useFormState } from 'react-dom';

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
      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="form-input"
      />
      {state?.errors && (
        <span className="text-red-500">{state.errors?.name?._errors[0]}</span>
      )}
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="form-input"
      />
      {state?.errors && (
        <span className="text-red-500">{state?.errors?.email?._errors[0]}</span>
      )}
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone number"
        className="form-input"
      />
      {state?.errors && (
        <span className="text-red-500">
          {state?.errors?.phoneNumber?._errors[0]}
        </span>
      )}

      <textarea
        name="messageContact"
        placeholder="Your Message..."
        className="form-input min-h-[147px]"
      />
      {state?.errors && (
        <span className="text-red-500">
          {state?.errors?.messageContact?._errors[0]}
        </span>
      )}
      <button type="submit" className="btn-submit">
        Submit
      </button>
      {/* <button type="submit" className="btn-submit">Submit<buton/> */}
    </form>
  );
};
