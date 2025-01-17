import {Menu,X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
    const [mobileDrawerOpen,setMobileDrawerOpen]=useState(false);
    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
   <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 backdrop-blur-[10px]">
  <section className="flex justify-between container px-4 mx-auto relative text-sm">
        <div className="flex  items-center ">
            <div className="flex iteams-center flex-shrink-0">
            <img className="h-10 w-15 mr-2 " src={logo} alt="logo"/>
            </div>
            <ul className="hidden lg:flex space-x-12 pl-5">
                <li><a href="#">Home</a></li>
     <select className="" name="Products" id="Products-select">
        <option value="">Products</option>
        <option value="over">Over</option>
        <option value="Feature">Feature</option>
        <option value="Tutorials">Tutorials</option>
        <option value="Solutions">Solutions</option>
        <option value="Pricing">Pricing</option>
        <option value="Releases">Releases</option>
     </select>
     <select name="Resources" id="Resources-select">
         <option value="">Resources</option>
         <option value="Blog">Blog</option>
         <option value="Newsletter">Newsletter</option>
         <option value="Events">Events</option>
         <option value="Help centre">Help centre</option>
         <option value="Tutorials">Tutorials</option>
         <option value="Support">Support</option>
     </select>
                <li><a href="#">Pricing</a></li>
            </ul>
        </div>
        <div className="hidden lg:flex justify-center items-center flex-shrink-0 pr-32">
            <img className="h-10 w-15" src={logo1} alt="img"/>
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen? <X/>:<Menu />}
            </button>
        </div>
 </section>
    {mobileDrawerOpen &&(
        <div className="fixed right-0 z-20 bg-neutral-900  w-full p-12 flex flex-col justify-center lg:hidden">
            <ul className="text-[antiquewhite] pt-2.5">
                <li className="pl-1"><a href="#">Home</a></li>
                <select className="bg-neutral-900" name="Products" id="Products-select">
  <option value="">Products</option>
  <option value="over">Over</option>
  <option value="Feature">Feature</option>
  <option value="Tutorials">Tutorials</option>
  <option value="Solutions">Solutions</option>
  <option value="Pricing">Pricing</option>
  <option value="Releases">Releases</option>
</select><br></br>
<select className="bg-neutral-900" name="Resources" id="Resources-select">
  <option value="">Resources</option>
  <option value="Blog">Blog</option>
  <option value="Newsletter">Newsletter</option>
  <option value="Events">Events</option>
  <option value="Help centre">Help centre</option>
  <option value="Tutorials">Tutorials</option>
  <option value="Support">Support</option>
</select>
                <li className="pl-1"><a href="#">Pricing</a></li>
            </ul>

        </div>
    )}
    </nav> 

  );
};

export default Navbar;
