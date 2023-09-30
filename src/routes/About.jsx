import React from "react";
import pic from "../assets/profileofmine.jpg";

function About(){
    return (
        <>
        <div className="bg-gray-300 flex justify-center">
            <div className="bg-white w-4/5 sm:w-2/3 flex flex-col items-center my-5">
                <div className="my-5 w-40 md:w-64 border-4 border-yellow-500 rounded-full"><img className="rounded-full" src={pic} alt="" /></div>
                <div className="mb-5 mx-5"><p className="text-center sm:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui illum sapiente, ipsam aperiam beatae asperiores vitae a accusamus 
                    veniam et similique. Cum hic blanditiis reprehenderit eveniet, eum necessitatibus exercitationem dolore 
                    voluptates libero accusamus fugit nihil ea saepe ipsum labore beatae laudantium expedita cupiditate earum repellendus 
                    soluta id nam! Doloribus, dolorem quia adipisci ducimus incidunt vitae rerum sequi amet placeat tenetur. Ea quisquam eos 
                    dolorem officiis illo voluptatibus nesciunt. Id quas, doloremque saepe deserunt perspiciatis doloribus? Aliquam itaque
                     nisi error quaerat, id porro facilis doloremque quisquam corporis minima optio quasi tempora magni, molestiae tenetur
                      reiciendisreiciendis, rerum ipsa deleniti aut dicta eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae 
                      quod explicabo quibusdam reprehenderit aut dolor impedit provident error quasi suscipit dolore, corporis ut blanditiis 
                      eius modi quo aliquam et, iure, nulla nobis! Quam quia molestiae atque enim soluta, consequuntur natus facilis tempore,
                       excepturi fuga ipsa eius omnis obcaecati velit. Eaque eveniet, laudantium voluptates, impedit deleniti animi nemo accusamu
                       s quibusdam quae voluptatum reprehenderit dolor! In asperiores dolore at deleniti quae dignissimos ratione ab quos, quod 
                       reprehenderit 
                       dolorem adipisci obcaecati nam tempora sapiente. Sequi totam ex aspernatur explicabo nostrum porro sint, 
                       repudiandae nemo. Fuga molestias tenetur assumenda adipisci non blanditiis minima deleniti.</p></div>
            </div>
        </div>
        </>
    );
}

export default About;