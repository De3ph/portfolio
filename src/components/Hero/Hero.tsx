import HeroTitle from "./HeroTitle"

type Props = {}

const Hero = (props: Props) => {
  const title = "Hi, my name is Hamit Can"
  return (
    <main className='space-y-14'>
      <HeroTitle text={title} />

      <p className='font-normal text-lg xl:text-xl leading-normal first-letter:text-3xl first-letter:font-semibold'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe corrupti
        explicabo tempora quos tenetur quae, deserunt harum ratione incidunt
        fugiat!
      </p>
    </main>
  )
}

export default Hero
