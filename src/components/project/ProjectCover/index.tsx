import { projectData } from "@/data/projectData"
import { IconBrandGithub, IconWorld } from "@tabler/icons-react"
import { Anchor } from "@/components/anchor"
// import { ProjectMore } from "../projectMore/projectMore"

export const ProjectCover = () => {

  return (
    <section className="w-full pt-20 divide-y-reverse divide-slate-400 text-[#07090e]" id="application">
      <h1 className='text-3xl mb-10 font-medium text-[#07090e]'>
        <span className=' text-[#42e26f] font-medium'>//</span>Aplicações
      </h1>

      {projectData.map(item => (
        <div
          className="flex flex-col md:flex-row gap-8 md:gap-10 pb-10 mb-10 border-b"
          key={item.id}>
          <img
            className="w-full md:w-2/5 h-full rounded border border-slate-400"
            src={`/assets/projectCover/${item.thumbnail}`}
            alt={`Thumbnail do projeto ${item.title}`} />

          <div className="w-full flex flex-col gap-4 pr-5">
            <div className="flex gap-2 text-xl items-center font-semibold">
              <span className="font-bold text-[#42e26f]">//</span>
              <p>{item.title} </p>
            </div>
            <div className="h-full flex flex-col justify-between md:justify-normal gap-6">
              <div>
                {item.description}
              </div>
              <div className="flex gap-2 font-light flex-wrap">
                {item.technologies.map(tech => (
                  <div key={item.id} className="flex px-2.5 py-1 rounded bg-[#42e26f] text-[#07090e] text-sm font-medium">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-10 font-light md:mt-6 justify-center">
                <Anchor
                  title='Veja Online'
                  href={item.urlOnline}
                  icon={<IconWorld stroke={1.5} size={22} />} />
                
                <Anchor
                  title='Repositório'
                  href={item.urlGithub}
                  icon={<IconBrandGithub stroke={1.5} size={22} />} />
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <ProjectMore /> */}
    </section>
  )
}