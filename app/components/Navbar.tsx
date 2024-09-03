import Link from "next/link";
import {Navbar, NavbarBrand} from "flowbite-react";
import {FaRegBell} from "react-icons/fa6";
import {BiHelpCircle, BiMessageDetail} from "react-icons/bi";

export default function Header() {
    return (
        <Navbar fluid rounded className="p-4 shadow-sm">
            <NavbarBrand as={Link} href="/">
                <img src="/logo.jpeg" className="h-6 sm:h-9 mr-4 rounded-full" alt="Jamuna Square Logo"/>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-sky-400">Jamuna Square</span>
            </NavbarBrand>
            <div className="ml-auto flex">
                <span className="mr-4 self-center flex gap-2 text-black">
                <button title="Notifications"><FaRegBell/></button>
                <button title="Chat"><BiMessageDetail/></button>
                <button title="Help"><BiHelpCircle/></button>
                </span>
                <div className="flex flex-wrap gap-2 items-center bg-gray-100 px-1 pr-2 py-0.5 rounded">
                    <span className="rounded-full p-1 bg-slate-400 text-slate-50 text-s">JD</span>
                    <div>
                        <h3 className="text-xs">John Doe</h3>
                        <h4 className="text-xs text-gray-500">Secretary</h4>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}
