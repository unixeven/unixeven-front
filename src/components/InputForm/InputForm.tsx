import { FC } from 'react';
import { InitialState } from '@/types/difinitions';

interface InputFormProps {
  type: string;
  name: string;
  placeholder: string;
  state: InitialState;
}

export const InputForm: FC<InputFormProps> = ({
  name,
  type,
  placeholder,
  state,
}) => {
  return (
    <label className="w-full relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-input"
        aria-label={placeholder}
      />
      {state?.errors && (
        <span className="text-red-500 text-sm italic absolute -bottom-5 left-0">
          {state?.errors[name]?._errors[0]}
        </span>
      )}
    </label>
  );
};
