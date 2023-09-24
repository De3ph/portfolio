import HeroAnimation from "./HeroAnimation.tsx"
import HeroTitle from "./HeroTitle"

const Hero = () => {
  const title = "Hi, my name is Hamit Can"
  return (
    <main className='space-y-16 md:space-y-0 place-self-center'>
      <HeroTitle text={title} />

      <section className='grid grid-cols-1 place-items-center gap-y-8 md:gap-y-0 gap-x-0 md:gap-x-20 lg:gap-x-0 md:grid-cols-2'>
        <p className='font-normal text-lg xl:text-3xl leading-loose first-letter:text-3xl first-letter:font-semibold'>
          I'm mostly interested in web development, curious and eager to code. I
          do not hesitate to learn new technologies, encourage colleagues to
          become better together is pleasure to me.
        </p>
        <div className='max-w-full w-96 h-96'>
          <HeroAnimation />
        </div>
      </section>
    </main>
  )
}

export default Hero
