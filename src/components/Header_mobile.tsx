import { useContext } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { NavMobileContext } from "../contexts/NavMobileContext"
export function HeaderMobile() {
    const {open, setOpen} = useContext(NavMobileContext)
    return (
        <div className="w-full justify-between max-w-full text-white z-40 h-[60px] lg:hidden flex items-center px-[20px] fixed font-extrabold text-[20px]">
            <a href="#">
                Food
                <span className="text-[#93FF0A]">
                    Mood
                </span>
            </a>
            <AiOutlineMenu 
            onClick={() => setOpen(true)}
            className="w-8 h-8"/>
        </div>
    )
}