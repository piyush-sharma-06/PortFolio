import React from "react";
import {AiFillHome,AiFillPhone,AiFillMail,AiFillLinkedin,AiFillInstagram} from "react-icons/ai"

function Footer(){
    return (
        <>
            <div className="px-8 md:px-32 lg:px-60 sm:px-20 py-8 bg-gray-700 text-white">
                <div className="flex flex-col sm:flex-row gap-5 justify-between">
                    <div>
                        <div className="flex gap-2">
                            <AiFillHome className="mt-1" />
                            <div>
                            <p>Mathura, Uttar Pradesh</p>
                            <p>India</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <AiFillPhone />
                            <p>+91 7037267921</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <AiFillMail />
                            <p>ps5130125@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-64">
                        <h4 className="font-semibold text-yellow-400">About the Company</h4>
                        <p className="mx-4 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in. Consequuntur sunt esse officia perspiciatis provident minima velit natus voluptate!</p>
                        <div className="mx-4 flex gap-2 text-xl">
                            <a href="https://www.linkedin.com/in/piyush-sharma-33b2611aa/" target="#"><AiFillLinkedin /></a>
                            <a href="https://www.instagram.com/piyushsharma___06/" target="#"><AiFillInstagram /></a>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;