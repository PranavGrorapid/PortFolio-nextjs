import Image from "next/image";
import React from "react";
import nExt from '../../../public/assets/skills/nextjs.png'
import reacts from '../../../public/assets/skills/react.png'
import javascript from '../../../public/assets/skills/javascript.png'

import html from '../../../public/assets/skills/html.png'

import css from '../../../public/assets/skills/css.png'

import git from '../../../public/assets/skills/github1.png'

import mongodb from '../../../public/assets/skills/mongo.png'



const Skills = () => {

const skills=[
{
   img:nExt,
   skill:'NEXT'
},
{
    img:reacts,
    skill:'REACT'
 },
 {
    img:mongodb,
    skill:'Mongo DB'
 },
 {
    img:javascript,
    skill:'Javascript'
 },
 {
    img:html,
    skill:'HTML'
 },
 {
    img:css,
    skill:'Css'
 },
 {
    img:git,
    skill:'Git'
 },

]



  return (
    <div className="container mx-auto py-10 px-3">
      <div className="flex flex-col justify-start items-start">
        <div className="py-4 text-4xl text-green-600 font-bold">Skills</div>

        <div className="py-2 text-gray-600">What I can do</div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">


{

    skills.map((skill)=>{

        return (

            <div className=" bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">


            <div className="flex justify-center space-x-10  items-center gap-4">
    
                <div>
    
                    <Image src={skill.img} className="h-14 w-14"  alt="skill"/>
    
                </div>
    
                <div className="font-bold text-xl">
                    {skill.skill}
                </div>
    
            </div>
    
            </div>
        )
    })
}



     

      </div>


    </div>
  );
};

export default Skills;
