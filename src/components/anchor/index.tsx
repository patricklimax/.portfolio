import { ReactNode } from 'react';

export type Anchors = {
  href: string;
  title: string;
  icon: ReactNode;
};

export const Anchor = ({ href, icon, title }: Anchors) => {
  return (
    <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="py-1.5 px-3 flex items-center justify-center gap-2 text-sm rounded-md text-[#07090e] bg-white font-medium cursor-pointer transition-all duration-1000 hover:bg-lime-500 hover:text-white">
      {title}{icon}
    </a>
  )
}