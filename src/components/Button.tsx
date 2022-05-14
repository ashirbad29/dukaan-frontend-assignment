import clsx from 'clsx';
import { forwardRef } from 'react';

import { HTMLButtonProps } from '../interfaces/html';

type CustomButtonProps = {
  variant: 'primary' | 'secondary' | 'normal';
  outlined?: boolean;
};

type ButtonProps = HTMLButtonProps & CustomButtonProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = 'primary', children, type = 'button', ...rest } = props;

  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        'rounded px-5 py-2 text-lg font-medium transition-all disabled:cursor-not-allowed disabled:opacity-70',
        {
          'bg-primary text-white hover:bg-primary/90': variant === 'primary',
          'bg-white text-primary hover:text-primary/80': variant === 'secondary',
        }
      )}
      {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
