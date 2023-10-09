import { Anchors } from '../anchor'

type Props = Omit<Anchors, "title">

export const MediaSocial = ({ href, icon }: Props) => {
  return (
    <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex text-sm gap-2 items-center justify-center rounded-md text-slate-300 bg-[#07090e] p-1.5 cursor-pointer transition-all duration-1000 hover:bg-[#07090eee] ">
      {icon}
    </a>
  )
}