type Props = {
  link: NavLink
}

// bg-gradient-to-r from-purple-500 to-orange-500

const HeaderItem = (props: Props) => {
  return (
    <a
      href={props.link.href}
      className='text-lg md:text-2xl transition-colors duration-200  bg-clip-text bg-gradient-to-r from-stone-500 to-gray-200 hover:text-transparent '
    >
      {props.link.title}
    </a>
  )
}

export default HeaderItem
