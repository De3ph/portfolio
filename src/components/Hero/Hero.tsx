import { useEffect } from "react"
import { animate, spring } from "motion"

import HeroAnimation from "./HeroAnimation.tsx"
import HeroTitle from "./HeroTitle"
import content from "@content"

const Hero = () => {
  useEffect(() => {
    const heroDesc = document.getElementById("heroDesc")
    if (heroDesc) {
      animate(
        heroDesc,
        {
          opacity: [0.2, 0.8, 1],
          scale: [0.8, 1]
        },
        {
          easing: spring({
            mass: 1.4,
            from: 1.2,
            velocity: 0.1,
            stiffness: 80
          }),
          duration: 3
        }
      )
    }
  })
  return (
    <main id='heroDesc' className='space-y-16 md:space-y-0 place-self-center'>
      <HeroTitle text={content.firstPage.hero.title} />

      <section className='grid grid-cols-1 place-items-center gap-y-8 md:gap-y-0 gap-x-0 md:gap-x-20 lg:gap-x-0 md:grid-cols-2'>
        <p className='font-normal text-lg xl:text-3xl leading-loose first-letter:text-3xl first-letter:font-semibold'>
          {content.firstPage.hero.text}
        </p>
        <div className='max-w-full w-96 h-96'>
          <HeroAnimation />
        </div>
      </section>
    </main>
  )
}

export default Hero
