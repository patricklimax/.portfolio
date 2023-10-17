import { ReactNode } from 'react';

export type Anchors = {
  href: string;
  title?: string;
  icon: ReactNode;
};

export const Anchor = ({ href, icon, title }: Anchors) => {
  return (
    <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      className='py-1.5 px-2 flex items-center justify-center gap-2 text-sm rounded font-medium cursor-pointer transition-all duration-1000 bg-[#07090e] text-slate-300'>
      {title}{icon}
    </a>
  )
}