import HeaderItem from "./HeaderItem"

type Props = {
    links: NavLink[]
}

const Header = ({ links }: Props) => {
    return (
        <>
            <div className="flex justify-center gap-8 md:gap-14 py-10">
                {
                    links.map((link, index) => {
                        return (
                            <HeaderItem key={index} link={link} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Header