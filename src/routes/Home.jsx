import React ,{ useState} from "react";
import HeroImage from "../components/HeroImage";
import Loading from "../components/Loading";
import ShowProject from "../components/ShowProject"

function Home(){

    const [load , setLoad] = useState(true);

    setTimeout(function(){
        return setLoad(false);
    },1000);

    if(load){
        return <Loading />
    }

    

    return (
        <>
        <HeroImage />
        <ShowProject />
        
        
        </>
    );
}

export default Home;