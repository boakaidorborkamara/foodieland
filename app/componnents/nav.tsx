import Image from "next/image";
import Link from "next/link"
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import FoodielandLogo from "@/public/Foodieland-logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";



export function Nav () {

    type NavItem ={
        title:string,
        link:string
    };

    type NavItemProp= NavItem[];

    const nav_menu_items:NavItemProp =[{title:"Home", link:"/home"}, {title:"Recipes", link:"/recipes"}, {title:"Blog", link:"/blog"}, {title:"Contact", link:"/contact"}, {title:"About", link:"/about"}];
    



    
    return (

        <nav className="relative">
            {/* desktop menu  */}
            <div className="flex justify-between items-center py-5 px-5 md:px-15 border-b border-b-gray-400">
                {/* logo  */}
                <div>
                    <Image alt="FoodieLand Logo" src={FoodielandLogo}/>
                </div>

                {/* nav menus  */}
                <div className="hidden md:flex gap-5">
                {nav_menu_items.map((item:NavItem)=>{
                        return <Link href={item.link} key={item.link} className="font-medium">{item.title}</Link>;
                })}
                </div>

                {/* icons  */}
                <div className="hidden md:flex gap-4">
                    <RiFacebookFill className="text-2xl"/>
                    <FaTwitter className="text-2xl"/>
                    <FaInstagram className="text-2xl"/>
                </div>

                <GiHamburgerMenu className="md:hidden text-3xl"/>
            </div>

            {/* hamburger menu  */}
            <div className="md:hidden absolute bg-amber-300 w-full h-[100vh]  z-10 py-20">
                {/* logo  */}
                <div>
                    <p>x</p>
                </div>

                <div className="flex flex-col items-center gap-5">
                    {nav_menu_items.map((item:NavItem)=>{
                            return <Link href={item.link} key={item.link} className="font-medium">{item.title}</Link>;
                    })}
                </div>
            </div>
        </nav>
    );
}