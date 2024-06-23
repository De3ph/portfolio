import { useLottie } from "lottie-react"
import computerAnimation from "../../assets/lottie/computerAnimation.json"

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
