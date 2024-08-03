import { FC } from 'react';

import { Errors, InitialState } from '@/types/definitions';

interface InputFormProps {
  type: string;
  name: string;
  placeholder: string;
  state: InitialState;
}

const isErrors = (errors: any): errors is Errors => {
  return errors && typeof errors === 'object' && '_errors' in errors;
};

export const InputForm: FC<InputFormProps> = ({
  name,
  type,
  placeholder,
  state,
}) => {
  const errorMessage = isErrors(state.errors)
    ? state.errors[name]?._errors[0]
    : undefined;

  return (
    <label className="w-full relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-input"
        aria-label={placeholder}
      />
      {errorMessage && (
        <span className="text-red-500 text-sm italic absolute -bottom-5 left-0">
          {errorMessage}
        </span>
      )}
    </label>
  );
};
