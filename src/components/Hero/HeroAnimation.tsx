import { useLottie } from "lottie-react"
import computerAnimation from "../../assets/lottie/computerAnimation.json"
import type { JsxElement } from "typescript"

const HeroAnimation = () => {

  const style = {}

  const options = {
    animationData: computerAnimation,
    loop: true,
    autoplay: true
  }

  const { View } = useLottie(options, style)
  return <>{View}</>
}

export default HeroAnimation
