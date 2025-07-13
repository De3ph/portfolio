type Props = {
  title: string
  subtitle?: string
}

const HeroTitle = (props: Props) => {
  return (
    <header className='text-center space-y-2'>
      <h1 className='display-large bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent'>
        {props.title}
      </h1>
      {props.subtitle && (
        <p className='display-small text-muted-foreground font-normal'>
          {props.subtitle}
        </p>
      )}
    </header>
  )
}

export default HeroTitle
