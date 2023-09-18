type Props = {
  link: NavLink
}

const HeaderItem = (props: Props) => {
  return (
    <a href={props.link.href} className="text-lg md:text-2xl xl:text-4xl">
      {props.link.title}
    </a>
  )
}

export default HeaderItem
