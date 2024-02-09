import HeroAnimation from "./HeroAnimation.tsx"
import HeroTitle from "./HeroTitle"
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

      <section className='grid grid-cols-1 place-items-center gap-y-8 md:gap-y-0 gap-x-0 md:gap-x-20 lg:gap-x-0 md:grid-cols-2'>
        <p className='font-normal text-lg leading-loose first-letter:text-2xl first-letter:font-semibold whitespace-pre-line'>
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
