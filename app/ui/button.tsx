import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export function Button({ children, className, disabled, ...rest }: ButtonProps) {
  return (
    <div>
      <button
        {...rest}
        disabled={disabled}
        className={clsx(
          'flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
          className,
          { 
            'bg-blue-500 hover:bg-blue-400': !disabled,
            'bg-gray-400 cursor-not-allowed': disabled 
          }
        )}
      >
        {children}
      </button>
    </div>
  );
}
