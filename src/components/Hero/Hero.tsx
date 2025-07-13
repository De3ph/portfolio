import content from "@content"
import HeroAnimation from "./HeroAnimation.tsx"
import HeroTitle from "./HeroTitle"

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

      <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8 lg:gap-16'>
        <div className='body-large text-center md:text-left'>
          {content.firstPage.hero.text}
        </div>
        <div className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 justify-self-center'>
          <HeroAnimation />
        </div>
      </section>
    </main>
  )
}

export default Hero
