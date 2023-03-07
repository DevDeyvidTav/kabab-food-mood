import AOS from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

export function MenuMobile(){
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out' })
      })
    return(
        <div
        id="menu-mobile"
        className="w-full h-screen  lg:hidden">
            <h2 
            data-aos="fade-up"
            className="text-3xl text-white mt-20  font-bold ml-14">
                Cardápio
                </h2>
            <div className="space-y-5 w-full mt-10 grid justify-center">
                    <div
                    data-aos="fade-up"
                        className="w-1/2 flex gap-5">
                        <img
                            className="w-[90px] h-[90px]"
                            src="/espagete.png"
                            alt="" />
                        <img
                            className="w-[90px] h-[90px]"
                            src="/cupim.png"
                            alt="" />
                        <img className="w-[90px] h-[90px]"
                            src="/costela.png"
                            alt="" />
                    </div>
                    <div 
                    data-aos="fade-up"
                    className="w-1/2 flex  gap-5">
                        <img
                            className="w-[90px] h-[90px]"
                            src="/salada.png" alt="" />
                        <img
                            className="w-[90px] h-[90px]"
                            src="/feijao.png" alt="" />
                        <img
                            className="w-[90px] h-[90px]"
                            src="/carne-batata.png" alt="" />
                    </div>
                    <div 
                    data-aos="fade-up"
                    className="w-1/2 flex  gap-5">
                        <img
                            className="w-[90px] h-[90px]"
                            src="/frango.png" alt="" />
                        <img
                            className="w-[90px] h-[90px]"
                            src="/batata.png" alt="" />
                        <img
                            className="w-[90px] h-[90px]"
                            src="/lasanha.png" alt="" />
                    </div>
                </div>
                <h3
                data-aos="fade-up"
                className="text-3xl w-4/5 mt-10 mx-auto font-extrabold text-white">
                        Melhores opções do nosso estado
                    </h3>
                    <p 
                    data-aos="fade-up"
                    className="w-4/5 mt-5 mx-auto text-[#BBB]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium obcaecati possimus dolor laboriosam exercitationem magni quo, placeat fugiat veritatis recusandae similique iure harum corrupti officia accusantium voluptatibus architecto animi?
                    </p>
                    <div className="space-y-2 w-4/5 flex flex-col items-center mx-auto mt-5">
                        <button 
                        data-aos="fade-up"
                        className="font-black text-[20px] bg-[#93FF0A] border-2 border-[#93FF0A] px-[50px] py-[15px]">
                            Peça agora!
                        </button>
                        <button
                        data-aos="fade-up"
                        className="font-black text-[20px] text-white border-2 border-white  px-[6px] py-[15px]">
                            Veja nossa Localização
                        </button>
                    </div>
        </div>
    )
}