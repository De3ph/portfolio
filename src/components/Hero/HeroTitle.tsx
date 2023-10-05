import { useEffect } from "react"
import { animate, spring } from "motion"

type Props = {
  text: string
}

const HeroTitle = (props: Props) => {
  return (
    <div>
      <p className='bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600 text-transparent font-semibold text-3xl md:text-4xl'>
        {props.text}
      </p>
    </div>
  )
}

export default HeroTitle
