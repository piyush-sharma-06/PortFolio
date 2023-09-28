import React from "react";

function ProjectCart({props}){
    return(
        <>
        <div className="w-60 rounded-md bg-white my-5 p-2">
            <div className=" w-56 h-52 bg-gray-400 flex justify-center items-center">
                <h1 className="text-3xl ">{props.id}</h1>
            </div>
            <div className="flex flex-col gap-2 ">
                <h1 className="font-semibold text-lg">{props.title}</h1>
                <p>{props.detail}</p>
                <p>{props.technology}</p>
                <a className="p-2 bg-cyan-500 text-center rounded-md hover:bg-green-400" href={props.link}>Show Product</a>
            </div>
        </div>
        

        </>
    );
}

export default ProjectCart;