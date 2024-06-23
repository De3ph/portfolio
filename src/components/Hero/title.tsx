type Props = {
  title: string
  subtitle?: string
}

const HeroTitle = (props: Props) => {
  return (
    <div className='font-semibold text-2xl bg-gradient-to-r bg-clip-text text-indigo-300'>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </div>
  )
}

export default HeroTitle
