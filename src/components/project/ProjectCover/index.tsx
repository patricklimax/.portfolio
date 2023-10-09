import { projectData } from "@/data/projectData"
import { IconBrandGithub, IconWorld } from "@tabler/icons-react"
import { Anchor } from "@/components/anchor"
import { ProjectMore } from "../projectMore/projectMore"

export const ProjectCover = () => {

  return (
    <section className="w-full pt-20 divide-y-reverse divide-slate-400" id="application">
      <h1 className='text-3xl mb-10 font-medium text-[#07090e]'>
        <span className=' text-white font-medium'>//</span>Aplicações
      </h1>

      {projectData.map(item => (
        <div
          className="flex flex-col md:flex-row gap-8 md:gap-10 pb-10 mb-10 border-b text-[#07090e]"
          key={item.id}>
          <img
            className="w-full md:w-2/5 h-full rounded-md border border-slate-400"
            src={`/assets/projectCover/${item.thumbnail}`}
            alt={`Thumbnail do projeto ${item.title}`} />

          <div className="w-full flex flex-col gap-4 pr-5">
            <div className="flex gap-2 text-xl text-white items-center font-semibold">
              <span className="font-bold">//</span>
              <p className="text-[#07090e]">{item.title} </p>
            </div>
            <div className="h-full flex flex-col justify-between md:justify-normal gap-6 ">
              <div>
                {item.description}
              </div>
              <div className="flex gap-2 font-light flex-wrap">
                {item.technologies.map(tech => (
                  <div key={item.id} className="flex px-2.5 py-1 rounded-md bg-white text-[#07090e] text-sm font-medium">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-10 font-light md:mt-6 justify-center">
                {/* <Anchor
                  href={item.urlOnline}
                  icon={<IconWorld color={"#07090e"} stroke={2} size={20} />}
                  title={"Veja Online"} />
                <Anchor
                  href={item.urlGithub}
                  icon={<IconBrandGithub color={"#07090e"} stroke={2} size={20} />}
                  title={"Repositório"} /> */}
                <a href={item.urlOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3  flex text-sm gap-2 items-center justify-center rounded-md text-slate-300 bg-[#07090e] p-1.5 cursor-pointer transition-all duration-1000 hover:bg-[#07090eee] ">
                  <p>Veja Online</p>
                  <IconWorld color="#cbd5e1" stroke={1} size={22} />
                </a>
                <a href={item.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 flex text-sm gap-2 items-center justify-center rounded-md text-slate-300 bg-[#07090e] p-1.5 cursor-pointer transition-all duration-1000 hover:bg-[#07090eee] ">
                  <p>Repositório</p>
                  <IconBrandGithub color="#cbd5e1" stroke={1} size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ProjectMore />
    </section>
  )
}