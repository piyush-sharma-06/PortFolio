import React from "react";
import projectData from "../data/ProjectData";
import ProjectCart from "./ProjectCart";



function ShowProject(){
    return(
        <>
        <div  className="bg-gray-200">
            <div className="text-center"><h1 className="text-red-500  text-3xl font-bold">Projects</h1></div>
            <div className="flex gap-5 justify-center flex-wrap">
                {projectData.map(function(item){
                    return <ProjectCart key={item.id} props = {item}/>
                })}
            </div>
        </div>
                    
        </>
    );
}

export default ShowProject;