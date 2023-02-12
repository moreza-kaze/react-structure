import * as React from 'react';
import Ripple from 'material-ripple-effects';

interface ButtonInterface {
  className?: string;
  children: string;
}

const Button: React.FC<ButtonInterface> = ({
  className,
  children
}: ButtonInterface) => {
  const ripple = new Ripple();
  return (
    <button
      className={`h-10 w-23 border border-solid border-gray-300 ${className}`}
      onMouseDown={(e) => ripple.create(e, 'light')}
    >
      {children}
    </button>
  );
};
export default Button;
