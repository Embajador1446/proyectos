import { useState } from "react";
import { link } from "react-scroll";
import { FaTime } from "react-icons/fa";
import { CimenuFries } from "react-icons/ci";




const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {setClick(!click);}
    const content = <>
        <div className="lg:hidden md:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition ">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Inicio">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Inicio </li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About </li>
                </Link>
                <Link spy={true} smooth={true} to="Servicios">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Servicios</li>
                </Link>
                <Link spy={true} smooth={true} to="Proyects">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Proyects </li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z.50 text-white lg:py-5 px-20 py-4 ">
                <div className="flex items-center flex-1">
                    <span className="text-3x1 font-bold">logo</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden ">
                    <div className="flex-10">
                        <ul className="flex grap-8  mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="Inicio">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Inicio </li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About </li>
                            </Link>
                            <Link spy={true} smooth={true} to="Servicios">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Servicios</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Proyects">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Proyects </li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:textfuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click, ? <FaTime /> : <CimenuFries />}
                </button>
            </div>

        </nav>
    );
}

export default Navbar;
