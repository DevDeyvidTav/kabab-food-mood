export function HomeMobile() {
    return (
        <div className="w-full h-screen max-w-full max-h-full lg:hidden  bg-home-mobile bg-no-repeat bg-cover">
            <div className="pt-[330px] w-full flex flex-col items-center gap-16">
                <img
                    src="/KABAB.png"
                    alt=""
                    className="w-[269px] h-[79px]"
                />
                <p className="font-bold text-[15px] w-[355px] text-white text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>

                <div className="space-x-5">
                    <button className="px-[30px] font-black text-[16px] py-[15px] bg-[#93FF0A]">
                        Peça agora!
                    </button>
                    <button className="px-[30px] font-black text-[16px] py-[15px] text-white border-2 border-white">
                        Veja mais
                    </button>
                </div>
            </div>
        </div>
    )
}