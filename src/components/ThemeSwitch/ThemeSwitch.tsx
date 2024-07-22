import { SwitchProps, useSwitch, VisuallyHidden } from '@nextui-org/react';
import { IoMoon } from 'react-icons/io5';
import { PiSunDimFill } from 'react-icons/pi';

export const ThemeSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2 ">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              'w-8 h-8',
              'flex items-center justify-center',
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
