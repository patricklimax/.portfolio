import { IconArrowNarrowRight } from "@tabler/icons-react"
import { Anchor } from "../../anchor"

export const ProjectMore = () => {
  return (
    <section className="w-3/4 mx-auto" id="section2">
      <div className='flex gap-4 items-center justify-center font-medium'>
        <h1>Se interessou?</h1>
        <Anchor
          href={''}
          title={'Veja todos'}
          icon={<IconArrowNarrowRight size={22} stroke={1.5} />} />
      </div>
    </section>
  )
}