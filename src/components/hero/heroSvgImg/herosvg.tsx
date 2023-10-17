import Image from 'next/image';
import svg from './svg.svg'

export const HeroSvg = () => {
  return (
    <Image src={svg} alt="" />
  )
}