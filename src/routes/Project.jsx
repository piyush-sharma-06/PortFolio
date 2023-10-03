import React , {useState} from "react";
import projectData from "../data/ProjectData";
import ProjectCart from "../components/ProjectCart";
import Loading from "../components/Loading";

function Project(){

    const [load , setLoad] = useState(true);
    
    setTimeout(function(){
        return setLoad(false);
    },1000);

    if(load){
        return <Loading />
    }

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