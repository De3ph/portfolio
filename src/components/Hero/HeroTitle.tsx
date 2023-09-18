import React from "react"

type Props = {
  text: string
}

const HeroTitle = (props: Props) => {
  return (
    <div>
      <p className="bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600 text-transparent text-3xl md:text-5xl xl:text-7xl">
        {props.text}
      </p>
    </div>
  )
}

export default HeroTitle
