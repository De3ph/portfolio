import HeroAnimation from "./animation.tsx"
import HeroTitle from "./title.tsx"
import content from "@content"

const Hero = () => {
  return (
    <main
      id='heroDesc'
      className='space-y-16 md:-space-y-8 lg:-space-y-16 place-self-center'
    >
      <HeroTitle
        title={content.firstPage.hero.title}
        subtitle={content.firstPage.hero.subtitle}
      />

      <section
        className='grid grid-cols-1 place-items-center 
       md:grid-cols-2 md:gap-y-0 gap-x-0 md:gap-x-20 
      lg:gap-x-0'
      >
        <div className='font-normal text-base leading-loose'>
          {content.firstPage.hero.text}
        </div>
        <div className='max-w-full w-72 h-72'>
          <HeroAnimation />
        </div>
      </section>
    </main>
  )
}

export default Hero
