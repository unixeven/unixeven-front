'use client';

import { createUserMessage } from '@/services/actions';
import { Errors, FormStructure, InitialState } from '@/types/definitions';
import { useFormState } from 'react-dom';
import { Button } from '../Button/Button';
import { InputForm } from '../InputForm/InputForm';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { toast } from 'react-toastify';

const initialState: InitialState = {
  message: '',
  errors: {} as Errors,
};

interface FormContactUsProps {
  onClose: () => void;
}

export const FormContactUs: React.FC<FormContactUsProps> = ({ onClose }) => {
  const [state, formAction] = useFormState(createUserMessage, initialState);
  const [formData, setFormData] = useState<FormStructure | null>(null);
  const { lang } = useParams();

  useEffect(() => {
    const langData = async () => {
      if (lang === 'uk' || lang === 'en') {
        const data = await getDictionary(lang);
        setFormData(data.form);
      }
    };
    langData();
  }, [lang]);

  useEffect(() => {
    if (state.message === 'Form submitted successfully!') {
      onClose();
      toast.success('Заявка отправлена, скоро с вами свяжутся!');
    }
  }, [state.message, onClose]);

  if (!formData) {
    return <p>Loading...</p>;
  }

  const { title, inputs, textarea, buttonText } = formData;

  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center relative gap-6 w-full"
      aria-labelledby="form-title"
    >
      <h2
        id="form-title"
        className="font-montserrat text-[40px]/normal tracking-[1.2px] font-normal text-cobalt dark:text-lightWhite"
      >
        {title}
      </h2>
      {inputs.map((input, index) => (
        <InputForm
          key={index}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          state={state}
        />
      ))}
      <label className="w-full relative">
        <textarea
          name={textarea.name}
          placeholder={textarea.placeholder}
          className="resize-none form-input min-h-[147px]"
          aria-label="Your Message"
        />
        {state?.errors && (
          <span className="text-red-500 text-sm italic absolute -bottom-5 left-0">
            {state?.errors?.messageContact?._errors[0]}
          </span>
        )}
      </label>
      <Button
        buttonType="submit"
        text={buttonText}
        className="btn-submit"
        handleModal={() => {}}
        ariaLabel="Submit Form"
      />
    </form>
  );
};
