type Props = {
  link: NavLink
}

const HeaderItem = (props: Props) => {
  return (
    <a
      href={props.link.href}
      className='navigation-text bg-gradient-to-r from-foreground to-primary/80 bg-clip-text lg:hover:text-transparent'
    >
      {props.link.title}
    </a>
  )
}

export default HeaderItem
