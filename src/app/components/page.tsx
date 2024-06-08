'use client';

import Link from 'next/link';

const COMPONENT_PAGES = [
  {
    label: 'Button',
    path: '/buttons',
  },
];

const Componentspage = () => {
  return (
    <div>
      <div className='pb-6 pt-2'>
        <h1 className='text-lg font-semibold md:text-xl'>Components</h1>
        <p>
          Find a set of various components for React which uses Tailwind CSS to
          style them.
        </p>
      </div>
      <ul>
        {COMPONENT_PAGES.map((page, index) => {
          return (
            <Link href={`/components${page.path}`} key={index}>
              <li className='grid size-24 place-items-center rounded-lg bg-neutral-200 outline-none transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] duration-150 hover:bg-neutral-200/85 hover:shadow-md active:bg-neutral-200/45 md:size-40'>
                {page.label}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Componentspage;
