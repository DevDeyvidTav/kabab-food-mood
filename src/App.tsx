import { About } from "./components/About";
import { AboutMobile } from "./components/About_mobile";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { HeaderMobile } from "./components/Header_mobile";
import { Home } from "./components/Home";
import { HomeMobile } from "./components/Home_mobile";
import { Menu } from "./components/Menu";
import { MenuMobile } from "./components/Menu_mobile";
import { NavMobile } from "./components/NavMobile";

export function App(){
  return (
    <div className="w-screen max-w-full">
        <HeaderMobile/>
        <NavMobile/>
        <Home/>
        <HomeMobile/>
        <About/>
        <AboutMobile/>
        <Menu/>
        <MenuMobile/>
        <Contact/>
        <Footer/>
    </div>
  )
}
