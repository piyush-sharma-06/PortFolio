import React ,{useState} from "react";
import {AiFillHome,AiFillPhone,AiFillMail,AiFillLinkedin,AiFillInstagram} from "react-icons/ai"
import Loading from "../components/Loading";

function ContactMe(){

    const [load , setLoad] = useState(true);
    
    setTimeout(function(){
        return setLoad(false);
    },1000);

    if(load){
        return <Loading />
    }

    return (
        <>
        <div className="bg-gray-300 items-center flex justify-center">
            <div className="bg-white m-5 p-2 w-[100vh] h-[80vh] flex flex-col gap-10 justify-center  sm:px-20 md:px-40 " >
               
                <div className="flex gap-2">
                    <AiFillLinkedin className="mt-1" />
                    <div>
                        <h1>LinkedIn Profile</h1>
                        <a className="text-sm text-blue-500" target="#" href="https://www.linkedin.com/in/piyush-sharma-33b2611aa/">https://www.linkedin.com/in/piyush-sharma-33b2611aa/</a>
                    </div>
                </div>
                <div className="flex gap-2">
                    <AiFillInstagram className="mt-1" />
                    <div>
                    <h1>Instagram Profile</h1>
                        <a className="text-sm text-blue-500" target="#" href="https://www.instagram.com/piyushsharma___06/">https://www.instagram.com/piyushsharma___06/</a>
                    </div>
                </div>
                <div className="flex gap-2">
                    <AiFillHome className="mt-1" />
                    <div>
                    <h1>Address</h1>
                        <p className="text-sm">Mathura, Uttar Pradesh</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <AiFillMail className="mt-1" />
                    <div>
                    <h1>Emain</h1>
                        <p className="text-sm">ps5130125@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <AiFillPhone className="mt-1" />
                    <div>
                    <h1>Phone No.</h1>
                        <p className="text-sm">7037267921</p>
    
                    </div>
                
                </div>
            </div>
        </div>
        </>
    );
}

export default ContactMe;