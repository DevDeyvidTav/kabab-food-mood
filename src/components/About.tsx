export function About() {
    return (
        <div
            id="about"
            className="w-full h-screen bg-[#EEEEEE] gap-[120px] max-w-full pt-20 hidden lg:flex ">
            <img
                className="rounded-md ml-20 h-[80%] w-[30%]"
                src="/img-about.png"
                alt="" />
            <div>
                <h2 className="text-[#93FF0A] text-3xl font-bold">
                    Sobre
                </h2>
                <h3 className="text-[#4A4A4A] text-5xl mt-10 w-[80%] font-extrabold">
                    Elteito o melhor restaurante de Pernambuco em 2022
                </h3>
                <p className="font-thin w-[70%] mt-10 text-lg text-[#4A4A4A]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro aliquid necessitatibus ratione. Ea explicabo laudantium nostrum exercitationem dolorem molestias amet earum mollitia nam totam officiis, perferendis modi ipsam a.
                    Quod unde perferendis minus suscipit adipisci autem qui ipsa cupiditate voluptates modi sapiente quas, debitis, quidem amet quaerat! Explicabo blanditiis atque voluptatibus tempora culpa cum id cumque ratione optio magni.
                </p>
                <button className="font-black text-[20px] mt-10 bg-[#93FF0A] px-[58px] py-[15px]">
                    Veja nosso Cardápio
                </button>
            </div>
        </div>
    )
}