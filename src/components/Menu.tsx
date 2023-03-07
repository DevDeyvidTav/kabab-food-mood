import AOS from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

export function Menu() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out' })
      })
    return (
        <div 
        id="menu"
        className="w-full h-screen max-w-full lg:flex hidden lg:flex-col ">
            <h2 className="text-[#93FF0A] text-3xl font-bold pl-10 pt-10">
                Cardápio
            </h2>
            <div className="w-full flex gap-[150px] mt-20 px-10">
                <div
                data-aos="fade-right"
                className="space-y-5">
                    <div
                        className="w-1/2 flex gap-5">
                        <img
                            className="w-[150px] h-[150px]"
                            src="/espagete.png"
                            alt="" />
                        <img
                            className="w-[150px] h-[150px]"
                            src="/cupim.png"
                            alt="" />
                        <img className="w-[150px] h-[150px]"
                            src="/costela.png"
                            alt="" />
                    </div>
                    <div className="w-1/2 flex  gap-5">
                        <img
                            className="w-[150px] h-[150px]"
                            src="/salada.png" alt="" />
                        <img
                            className="w-[150px] h-[150px]"
                            src="/feijao.png" alt="" />
                        <img
                            className="w-[150px] h-[150px]"
                            src="/carne-batata.png" alt="" />
                    </div>
                    <div className="w-1/2 flex  gap-5">
                        <img
                            className="w-[150px] h-[150px]"
                            src="/frango.png" alt="" />
                        <img
                            className="w-[150px] h-[150px]"
                            src="/batata.png" alt="" />
                        <img
                            className="w-[150px] h-[150px]"
                            src="/lasanha.png" alt="" />
                    </div>
                </div>
                <div 
                data-aos="fade-left"
                className="w-1/2  flex flex-col">
                    <h3 className="text-5xl font-extrabold text-white">
                        Melhores opções do nosso estado
                    </h3>
                    <p className="w-4/5 mt-5 text-[#BBB]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium obcaecati possimus dolor laboriosam exercitationem magni quo, placeat fugiat veritatis recusandae similique iure harum corrupti officia accusantium voluptatibus architecto animi?
                    </p>
                    <div className="space-x-5 mt-5">
                        <button className="font-black text-[20px] bg-[#93FF0A] border-2 border-[#93FF0A] px-[58px] py-[15px]">
                            Peça agora!
                        </button>
                        <button className="font-black text-[20px] text-white border-2 border-white  px-[58px] py-[15px]">
                            Veja nossa Localização
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}