import {HiLocationMarker, HiOutlineMail} from "react-icons/hi"
import {IoMdCall} from "react-icons/io"
import {BsMailbox, BsWhatsapp} from "react-icons/bs"
import AOS from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

export function Contact(){
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out' })
      })
    return (
        <div
        data-aos="fade-up"
        id="contact"
        className="w-full h-[80vh] lg:h-[70vh] flex px-12 bg-[#EEEEEE] max-w-full lg:flex-row flex-col pt-12 lg:pt-24 lg:px-72 justify-between">
            <div>
                <h2 className="text-4xl font-extrabold lg:w-[400px]">
                    Entre em contato com a gente
                </h2>
                <p className="text-lg  lg:w-[450px] mt-10">
                Entre em contato com a Kabab FoodMood,
                tire suas dúvidas e faça seu pedido.
                </p>
                <button className="bg-[#93FF0A] mt-10 flex gap-2 text-xl px-10 font-black items-center py-4">
                    Entre em contato
                    <BsWhatsapp className="w-6 h-6"/>
                </button>
            </div>
            <div className="space-y-10 text-xl font-bold pb-10">
                <p className="flex items-center gap-2">
                   <IoMdCall/> 99 99999-9999
                </p>

                <p className="flex items-center gap-2">
                   <HiLocationMarker/> Bairro, rua, número
                </p>

                <p className="flex items-center gap-2">
                   <HiOutlineMail/> devdeyvid2022@gmail.com
                </p>
            </div>
        </div>
    )
}