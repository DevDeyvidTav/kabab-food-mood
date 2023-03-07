import AOS from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import { Header } from "./Header";

export function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out' })
      })
    return (
        <div className="w-screen h-screen lg:flex lg:flex-col hidden max-w-full max-h-full bg-home bg-no-repeat bg-cover">
            <Header />
            <div 
            data-aos="fade-right"
             className="flex-col flex justify-between mt-[100px] h-3/5 w-full px-[87px]">
                <div>
                    <img src="/KABAB.png" alt="" />
                    <p className="font-semibold text-[27px] text-white w-[659px] mt-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <div className="mt-10 gap-8 flex">
                        <button className="font-black text-[20px] bg-[#93FF0A] px-[58px] py-[15px]">
                            Peça agora!
                        </button>
                        <button className="font-black text-[20px] text-white border-2 border-white px-[58px] py-[15px]">
                            Veja mais
                        </button>
                    </div>
                </div>
                <div className="flex w-full  gap-32 font-black text-[23px]">
                    <div>
                        <p className=" text-[#757575]">
                            Almoço
                        </p>
                        <p className="text-white">
                            1:00-03:00pm
                        </p>
                    </div>
                    <div>
                        <p className=" text-[#757575]">
                            Jantar
                        </p>
                        <p className="text-white">
                            7:00-10:00pm
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}