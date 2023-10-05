type Props = {
  text: string
}

const HeroTitle = (props: Props) => {
  return (
    <div className='font-semibold text-3xl md:text-4xl bg-gradient-to-r bg-clip-text text-indigo-300'>
      <p>{props.text}</p>
    </div>
  )
}

export default HeroTitle
