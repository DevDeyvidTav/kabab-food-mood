import { useState } from "react"
import {BsSearch} from "react-icons/bs"

export function Header(){
    const [select, setSelect] = useState(1)
    return(
        <div className="w-full max-w-full text-white justify-between items-center h-[104px] px-[91px] flex  font font-extrabold text-[25px]">
            <div>
                Food
                <span className="text-[#93FF0A]">
                    Mood
                </span>
            </div>
            <ul className="flex gap-[58px] ">
                <li 
                onClick={() => setSelect(1)}
                className={`${select === 1 ? "text-[#93FF0A]" : "" } duration-500`}>
                   <a href="#">Home</a>
                    <div className={`${select === 1 ? "" : "opacity-0"} duration-500 w-[40px] mx-auto h-1 bg-[#93FF0A]`}/>
                </li>
                <li 
                onClick={() => setSelect(2)}
                className={`${select === 2 ? "text-[#93FF0A]" : "" } duration-500`}>
                    <a href="#about">Sobre</a>
                    <div className={`${select === 2 ? "" : "opacity-0"} duration-500 w-[40px] mx-auto h-1 bg-[#93FF0A]`}/>
                </li>
                <li 
                onClick={() => setSelect(3)}
                className={`${select === 3 ? "text-[#93FF0A]" : "" } duration-500`}>
                    <a href="#menu">Cardápio</a>
                    <div className={`${select === 3 ? "" : "opacity-0"} duration-500 w-[40px] mx-auto h-1 bg-[#93FF0A]`}/>
                </li>
                <li 
                onClick={() => setSelect(4)}
                className={`${select === 4 ? "text-[#93FF0A]" : "" } duration-500`}>
                    <a href="#contact">Contato</a>
                    <div className={`${select === 4 ? "" : "opacity-0"} duration-500 w-[40px] mx-auto h-1 bg-[#93FF0A]`}/>
                </li>
            </ul>
            <ul className="flex gap-[62px]">
                <li>
                    <BsSearch className="text-white"/>
                </li>
                <li>
                    <img src="/user.png" alt="" />
                </li>
            </ul>
        </div>
    )
}