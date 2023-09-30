import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"

function Navbar() {
    const [openBar, setOpenBar] = useState(false);
    function handleSideBarOpen() {
        setOpenBar(!openBar);
    }
    function closeSideBar() {
        setOpenBar(!openBar);
    }


    return (
        <>
            <div className="bg-gray-700 p-3 flex justify-between items-center">
                <div className="text-3xl sm:text-4xl text-white hover:text-yellow-400 font-semibold">
                    <Link to="/">Portfolio.</Link>
                </div>
                <ul className="hidden md:flex gap-10 text-white text-xl font-semibold">
                    <li className="hover:text-yellow-400 hover:scale-125 duration-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-yellow-400 hover:scale-125 duration-500"><Link to="/about">About</Link></li>
                    <li className="hover:text-yellow-400 hover:scale-125 duration-500"><Link to="/project">Projects</Link></li>
                    <li className="hover:text-yellow-400 hover:scale-125 duration-500"><Link to="/contact">Contact</Link></li>
                </ul>

                <button onClick={handleSideBarOpen} className="md:hidden text-xl hover:text-yellow-400 text-white">
                    {!openBar ? <FaBars /> : <AiOutlineClose />}
                </button>

            </div>
            <div className={`fixed bg-black transition-all duration-500 ${!openBar ? "translate-x-full" : "translate-x-0"}`}>
                <ul className="text-white flex flex-col h-screen w-screen justify-center items-center  gap-10 text-2xl font-semibold">
                    <li><Link onClick={closeSideBar} className="p-2 hover:bg-cyan-500 hover:text-black rounded-md" to="/">Home</Link></li>
                    <li><Link onClick={closeSideBar} className="p-2 hover:bg-cyan-500 hover:text-black rounded-md" to="/about">About</Link></li>
                    <li><Link onClick={closeSideBar} className="p-2 hover:bg-cyan-500 hover:text-black rounded-md" to="/project">Projects</Link></li>
                    <li><Link onClick={closeSideBar} className="p-2 hover:bg-cyan-500 hover:text-black rounded-md" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    );
}
export default Navbar;