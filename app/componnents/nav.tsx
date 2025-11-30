import Image from "next/image";
import Link from "next/link"
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import FoodielandLogo from "@/public/Foodieland-logo.svg"


export function Nav () {

    type NavItem ={
        title:string,
        link:string
    };

    type NavItemProp= NavItem[];

    const nav_menu_items:NavItemProp =[{title:"Home", link:"/home"}, {title:"Recipes", link:"/recipes"}, {title:"Blog", link:"/blog"}, {title:"Contact", link:"/contact"}, {title:"About", link:"/about"}];
    



    
    return (

        <nav >
            <div className="flex justify-between items-center py-5 px-15 border-b border-b-gray-400">
                {/* logo  */}
                <div>
                    <Image alt="FoodieLand Logo" src={FoodielandLogo}/>
                </div>

                {/* nav menus  */}
                <div className="flex gap-5">
                {nav_menu_items.map((item:NavItem)=>{
                        return <Link href={item.link} key={item.link} className="font-medium">{item.title}</Link>;
                })}
                </div>

                {/* icons  */}
                <div className="flex">
                    <RiFacebookFill />
                    <FaTwitter/>
                    <FaInstagram />
                </div>
            </div>
        </nav>
    );
}