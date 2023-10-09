import { ReactNode } from 'react';

type BadgeTechs = {
  name: string;
  icon: ReactNode;
};

export const BadgeTech = ({ name, icon }: BadgeTechs) => {
  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-white text-lime-500 text-sm font-black">
      {icon}
      {name}
    </div>
  )
}