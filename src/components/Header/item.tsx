type Props = {
  link: NavLink
}

// bg-gradient-to-r from-purple-500 to-orange-500

const HeaderItem = (props: Props) => {
  return (
    <a
      href={props.link.href}
      className='text-base md:text-lg transition-colors duration-200  bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-300 lg:hover:text-transparent hover:auto'
    >
      {props.link.title}
    </a>
  )
}

export default HeaderItem
