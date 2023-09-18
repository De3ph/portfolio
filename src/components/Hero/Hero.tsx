import HeroTitle from "./HeroTitle"

type Props = {}

const Hero = (props: Props) => {
  const title = "Hi!"
  return (
    <main>
      <HeroTitle text={title} />
    </main>
  )
}

export default Hero
