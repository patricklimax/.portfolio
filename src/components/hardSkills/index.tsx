import { Skill } from './skill';
import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVite,
} from '@tabler/icons-react';


export const HardSkills = () => {
  return (
    <div className="w-full flex flex-wrap gap-2" id="skills">
      <Skill name={'HTML5'} icon={<IconBrandHtml5 size={20} stroke={2} />} />
      <Skill name={'CSS3'} icon={<IconBrandCss3 size={20} stroke={2} />} />
      <Skill name={'Tailwind'} icon={<IconBrandTailwind size={20} stroke={2} />} />
      <Skill name={'Javascript'} icon={<IconBrandJavascript size={20} stroke={2} />} />
      <Skill name={'Typescript'} icon={<IconBrandTypescript size={20} stroke={2} />} />
      <Skill name={'React.js'} icon={<IconBrandReact size={20} stroke={2} />} />
      <Skill name={'Next.js'} icon={<IconBrandNextjs size={20} stroke={2} />} />
      <Skill name={'Git'} icon={<IconBrandGit size={20} stroke={2} />} />
      <Skill name={'Github'} icon={<IconBrandGithub size={20} stroke={2} />} />
      <Skill name={'Vite'} icon={<IconBrandVite size={20} stroke={2} />} />
      <Skill name={'Vercel'} icon={<IconBrandVercel size={20} stroke={2} />} />
    </div>
  );
};
