import Lottie from "lottie-react"
import computerAnimation from "../../assets/lottie/computerAnimation.json"

type Props = {}

const HeroAnimation = (props: Props) => {
  return (
    <>
      <Lottie animationData={computerAnimation} />
    </>
  )
}

export default HeroAnimation
