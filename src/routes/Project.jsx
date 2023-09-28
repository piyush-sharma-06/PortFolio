import React from "react";
import projectData from "../data/ProjectData";
import ProjectCart from "../components/ProjectCart";

function Project(){
    return (
        <>
        <div className="flex bg-gray-300 gap-5 flex-wrap justify-center">

            {projectData.map(function(item){
                return <ProjectCart key={item.id} props = {item} />
            })
            }

        </div>
        </>
    );
}

export default Project;