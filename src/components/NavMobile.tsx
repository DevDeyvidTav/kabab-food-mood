import { useContext } from "react"
import { NavMobileContext } from "../contexts/NavMobileContext"
import {AiOutlineClose} from "react-icons/ai"

export function NavMobile() {
    const { open, setOpen } = useContext(NavMobileContext)
    return (
        <div className={`${open ? "translate-x-0" : "-translate-x-full"} z-50  duration-500 flex w-full fixed h-screen`}>
            <div className="bg-[#1B1C23] px-3 text-[30px] border-r-2 border-white font-extrabold text-white flex flex-col w-[70%] h-full">
                <div className="w-full border-b-2 flex justify-between items-center cursor-pointer border-white">
                    <div>
                    Food
                    <span className="text-[#93FF0A]">
                        Mood
                    </span>
                    </div>
                    <AiOutlineClose 
                    onClick={() => setOpen(false)}
                    className="text-white opacity-100 w-6 h-6"/>
                </div>
                <div className="text-[20px] font-semibold mt-10 gap-5 flex flex-col">
                    <a
                    onClick={() => setOpen(false)}
                    href="#">
                        Home
                    </a>
                    <a 
                    onClick={() => setOpen(false)}
                    href="#about-mobile">
                        Sobre
                    </a>
                    <a 
                    onClick={() => setOpen(false)}
                    href="/#menu-mobile">
                        Cardápio
                    </a>
                    <a 
                    onClick={() => setOpen(false)}
                    href="#contact">
                        Contato
                    </a>
                </div>
                
            </div>
            <div className="bg-black opacity-40 w-[30%] h-full">
                
            </div>
        </div>
    )
}