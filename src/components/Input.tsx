import clsx from 'clsx';
import { forwardRef } from 'react';

import { CrossIcon } from '../icons';
import { HTMLInputProps } from '../interfaces/html';

type CustomInputProps = {
  onValueChange: (_val: string) => void;
  label: string;
  className?: string;
  wrapperClassName?: string;
  showClearIcon?: boolean;
  onInputClear?: () => void;
};

type InputProps = CustomInputProps & HTMLInputProps;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    onValueChange,
    id,
    className,
    wrapperClassName,
    label,
    placeholder,
    showClearIcon = false,
    onInputClear,
    ...rest
  } = props;

  return (
    <div className={`flex flex-col ${wrapperClassName && wrapperClassName}`}>
      <label htmlFor={id} className="mb-2 font-medium text-black-light">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={(e) => onValueChange(e.target.value)}
          className={clsx(
            'w-full rounded border border-black-extraLight px-4 py-3 text-base placeholder:leading-6 focus:border-primary focus:outline-none',
            className
          )}
          ref={ref}
          type="text"
          {...rest}
        />
        {showClearIcon && (
          <CrossIcon
            className="absolute right-4 h-5 w-5 cursor-pointer"
            onClick={() => onInputClear && onInputClear()}
          />
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
