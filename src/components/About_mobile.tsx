export function AboutMobile() {
    return (
        <div 
        id="about-mobile"
        className="w-full h-screen max-h-full text-white bg-about-mobile bg-cover bg-no-repeat lg:hidden">
            <h2 className="pt-10 ml-10 text-3xl font-extrabold text-[#2a2a2a]">
                Sobre
            </h2>
            <h3 className="text-4xl mt-20 font-extrabold mx-auto w-4/5">
                Eleito o melhor Restaurante de Pernambuco em 2022
            </h3>
            <p className="font-bold mt-10 w-4/5 mx-auto  text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda libero sit fuga earum aperiam hic, amet non iure nobis! Voluptates ipsa iusto iure doloribus quasi voluptate itaque enim, excepturi animi!
            </p>
            <button className="w-[300px] h-10 text-xl font-black m-10 bg-[#93FF0A]">
                Veja nosso cardápio
            </button>
        </div>
    )
}