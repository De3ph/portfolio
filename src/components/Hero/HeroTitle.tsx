import { Typewriter } from "react-simple-typewriter"

type Props = {
  title: string
  subtitles?: string[]
}

const HeroTitle = (props: Props) => {
  return (
    <div className='font-semibold text-3xl md:text-4xl bg-gradient-to-r bg-clip-text text-indigo-300'>
      <p>{props.title}</p>
      {props.subtitles && (
        <Typewriter
          words={props.subtitles}
          cursor
          loop
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={500}
        />
      )}
    </div>
  )
}

export default HeroTitle
