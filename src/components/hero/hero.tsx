import { HeroPattern } from './heroPattern/heroPattern';
import { HeroSvg } from './heroSvgImg/herosvg';
import {
  IconArrowNarrowRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import { HardSkills } from '../hardSkills';
import { Anchor } from '../anchor';

export const Hero = () => {
  return (
    <section className="w-full relative pt-16" id="hero">
      <HeroPattern />
      <div className="flex flex-col md:flex-row justify-between md:mt-12 p-2 gap-2">
        <div className="md:w-1/2 flex justify-center items-center">
          <HeroSvg />
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center gap-6" id="heroRight">
          <div className="flex flex-col gap-2 text-center" id="descrition">
            <p>Olá! Meu nome é...</p>
            <p className='flex gap-1 items-center justify-center'>
              <span className="font-bold text-2xl text-[#42e26f]">Patrick</span>
              <span>desenvolvedor</span>
              <span className="font-bold text-2xl text-[#42e26f]">Frontend</span>
            </p>
            <p>
              ...apaixonado por{' '}
              <span className="font-bold">tecnologia</span>. Constantemente aprimorando minhas habilidades para criar experiências incríveis. Estou disponível para{' '}<span className="font-bold">colaborar</span> e{' '} <span className="font-bold">agregar valor</span> à sua equipe.
            </p>
          </div>
          <HardSkills />
          <div id="contact" className="w-full flex items-center justify-between md:mt-10">
            <Anchor
              title='Contato'
              href={'https://wa.me/5598983342518'}
              icon={<IconArrowNarrowRight stroke={1.5} size={25} />} />
            <div className="flex gap-2 items-center justify-center ">
              <Anchor
                href={'https://www.linkedin.com/in/patricklimax/'}
                icon={<IconBrandLinkedin stroke={1.5} size={25} />} />
              <Anchor
                href={'https://github.com/patricklimax'}
                icon={<IconBrandGithub stroke={1.5} size={25} />} />
              <Anchor
                href={'https://www.instagram.com/patricklimax/'}
                icon={<IconBrandInstagram stroke={1.5} size={25} />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
