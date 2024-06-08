'use client';
import { useState } from 'react';

import { Check, Clipboard } from 'lucide-react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';

type CardComponentProps = {
  children: React.ReactNode;
};

export const CardView: React.FC<CardComponentProps> = ({ children }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const getCode = () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    flushSync(() => {
      root.render(children);
    });

    const code = div.innerHTML;
    return code;
  };

  const onCopy = () => {
    const code = getCode();

    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div className='relative flex items-center justify-center rounded-[4px] bg-gradient-to-br from-neutral-100 to-neutral-50 px-0 py-24 md:px-2'>
      <div
        className='absolute right-3 top-3 cursor-pointer bg-transparent p-2'
        onClick={onCopy}
      >
        <div
          className={`absolute inset-0 transition-all duration-300${
            hasCheckIcon ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <Clipboard className='text-neutral-600' />
        </div>
        <div
          className={`absolute inset-0 transition-all duration-300${
            hasCheckIcon ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <Check className='text-neutral-600' />
        </div>
      </div>
      {children}
    </div>
  );
};
