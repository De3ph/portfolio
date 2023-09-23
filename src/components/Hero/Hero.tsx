import HeroAnimation from "./HeroAnimation"
import HeroTitle from "./HeroTitle"

type Props = {}

const Hero = (props: Props) => {
  const title = "Hi, my name is Hamit Can"
  return (
    <main className='space-y-14'>
      <HeroTitle text={title} />

      <section className='grid grid-cols-1 gap-y-8 md:gap-y-0 gap-x-0 md:gap-x-8 md:grid-cols-2 items-stretch'>
        <div className='grid items-center'>
          <p className='font-normal text-lg xl:text-xl leading-loose first-letter:text-3xl first-letter:font-semibold'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            corrupti explicabo tempora quos tenetur quae, deserunt harum ratione
            incidunt fugiat!
          </p>
        </div>
        <div>
          <HeroAnimation />
        </div>
      </section>
    </main>
  )
}

export default Hero
