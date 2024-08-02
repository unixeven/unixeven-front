import { useSwitch, VisuallyHidden } from '@nextui-org/react';
import { IoMoon } from 'react-icons/io5';
import { PiSunDimFill } from 'react-icons/pi';

interface ThemeSwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ThemeSwitch = ({ checked, onChange }: ThemeSwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: checked,
    onChange,
  });

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()} aria-label="Theme switch">
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              'w-8 h-8 ',
              'flex items-center justify-center bg-red-500',
              'rounded-lg bg-default-100 hover:bg-default-200',
            ],
          })}
        >
          {isSelected ? <PiSunDimFill size={24} /> : <IoMoon size={21} />}
        </div>
      </Component>
    </div>
  );
};
