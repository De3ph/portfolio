import { ThemeToggle } from "../ui/theme-toggle"
import HeaderItem from "./HeaderItem"

type Props = {
  links: NavLink[]
}

const Header = ({ links }: Props) => {
  return (
    <>
      <div className='flex justify-around items-center py-10'>
        <div className='flex justify-center gap-8 md:gap-12 flex-1'>
          {links.map((link, index) => {
            return <HeaderItem key={index} link={link} />
          })}
        </div>
        <div className='ml-4'>
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}

export default Header
