import HeaderItem from "./item"

type Props = {
  links: NavLink[]
}

const Header = ({ links }: Props) => {
  return (
    <>
      <div className='flex justify-center gap-8 md:gap-12 py-10'>
        {links.map((link, index) => {
          return <HeaderItem key={index} link={link} />
        })}
      </div>
    </>
  )
}

export default Header
