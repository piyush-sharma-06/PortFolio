import { Link } from "react-router-dom";
import React from "react";
import Image from "../assets/img..avif"

function HeroImage() {
    return (
        <>
            <div className="text-white" style={{
                background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
            }}>
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10" alt="hero" src={Image} />
                    <div class="text-center lg:w-5/12 w-full">
                        <h1 className="text-3xl my-4 md:text-5xl font-bold">
                        👋 Hey There 👋
                        </h1>
                        <p className="text-2xl mb-8">
                            My name is Piyush Sharma<br></br> (software engineer)
                        </p>
                        <div className="flex justify-center mx-auto">
                            <Link to="/project"><button
                                className=" bg-yellow-400 border-2 hover:bg-cyan-500 text-gray-800 font-bold rounded-full py-2 px-4 md:py-4 md:px-8">
                                View Projects
                            </button>
                            </Link>
                            <Link to="/about"><button
                                className="ml-4 border-2 hover:bg-cyan-500 bg-white text-gray-800 font-bold rounded-full py-2 px-4 md:py-4 md:px-8">
                                More About
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default HeroImage;