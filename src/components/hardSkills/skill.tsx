import { ReactNode } from 'react';

export type SkillProps = {
  name: string;
  icon: ReactNode;
};


export const Skill = ({ name, icon }: SkillProps) => {
  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#42e26f] text-[#07090e] text-sm font-medium">
      {icon}
      {name}
    </div>
  );
};