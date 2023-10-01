import { useEffect } from "react"
import { animate, spring } from "motion"

type Props = {
  text: string
}

const HeroTitle = (props: Props) => {
  useEffect(() => {
    const el = document.getElementById("el")
    if (el) {
      animate(
        el,
        {
          opacity: [0.2, 0.8, 1],
          scale: [0.8, 1]
        },
        {
          easing: spring(),
          duration: 3
        }
      )
    }
  })
  return (
    <div>
      <p
        id='el'
        className='bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600 text-transparent font-semibold text-3xl md:text-4xl'
      >
        {props.text}
      </p>
    </div>
  )
}

export default HeroTitle
