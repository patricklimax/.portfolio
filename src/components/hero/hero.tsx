import { HeroPattern } from './heroPattern/heroPattern';
import { HeroSVG3 } from './heroSvgImg/herosvg';
import {
  IconArrowNarrowRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { HardSkills } from '../hardSkills';
import { Anchor } from '../anchor';
import { MediaSocial } from '../mediaSocial';

export const Hero = () => {
  return (
    <section className="w-full text-[#07090e] relative pt-16" id="hero">
      <HeroPattern />
      <div className="flex flex-col md:flex-row justify-between gap-2 md:pt-12">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <HeroSVG3 />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6" id="heroRight">
          <div className="w-full flex flex-col gap-2 text-center" id="descrition">
            <p>Olá! Meu nome é...</p>
            <p className='flex gap-1 items-center justify-center'>
              <span className="font-bold text-2xl">Patrick</span>
              <span>desenvolvedor</span>
              <span className="font-bold text-2xl">Frontend</span>
            </p>
            <p>
              ...apaixonado por{' '}
              <span className="font-bold">tecnologia</span>. Constantemente aprimorando minhas habilidades para criar experiências incríveis. Estou disponível para{' '}<span className="font-bold">colaborar</span> e{' '} <span className="font-bold">agregar valor</span> à sua equipe.
            </p>
          </div>
          <HardSkills />
          <div id="contact" className="w-full flex items-center justify-center gap-10 md:justify-between md:mt-10">
            <a href=''
              target="_blank"
              rel="noopener noreferrer"
              className="py-1.5 px-3 flex items-center justify-center gap-2 text-sm rounded text-slate-300 bg-[#07090e] font-medium cursor-pointer transition-all duration-1000 hover:bg-[#07090eee] hover:text-white">
              <p>Contato</p>
              <IconArrowNarrowRight color="#cbd5e1" stroke={2} size={22} />
            </a>
            <div className="flex gap-2 items-center justify-center ">
              <MediaSocial
                href={'https://github.com/patricklimax'}
                icon={<IconBrandGithub stroke={2} size={22} color="#cbd5e1" />} />
              <MediaSocial
                href={'https://www.linkedin.com/in/patricklimax/'}
                icon={<IconBrandLinkedin stroke={2} size={22} color="#cbd5e1" />} />
              <MediaSocial
                href={'https://www.instagram.com/patricklimax/'}
                icon={<IconBrandInstagram stroke={2} size={22} color="#cbd5e1" />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
