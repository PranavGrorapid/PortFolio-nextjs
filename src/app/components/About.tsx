"use client"


import React, { useState } from 'react'
import Skills from './Skills'
import dynamic from 'next/dynamic'
import Reviews from './Reviews'

const About = () => {


const [shouldShow,setShouldShow]=useState(false)
const [showCustomerReviews,setshowCustomerReviews]=useState(false)

 
const DynamicSkills = dynamic(() => import('../components/Skills'), {
    ssr:false,
  loading: () => <p>Loading...</p>,
})


const DynamicReviews = dynamic(() => import('../components/Reviews'), {
    ssr:false,
  loading: () => <p>Loading...</p>,
})

  return (
    <div>
    <div className='container mx-auto mt-20 py-4  px-3 lg:py-0'>

        <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-center   lg:flex lg:space-x-10 '>

            <div className='flex flex-col items-start justify-start space-y-5'>

               <div className='uppercase text-xl tracking-widest text-green-700 font-bold'>About</div>

               <div className='py-4 text-4xl font-bold'>Who i Am</div>
 
               <div className='py-2 text-gray-600'>
                  # I am a Full stack Developer
               </div>

               <div className='py-2 text-gray-600'>
               I'm a passionate MERN stack developer with a flair for creating dynamic and efficient web applications. With a strong foundation in JavaScript, I excel in crafting responsive user interfaces and implementing server-side logic. I thrive on solving complex challenges and am dedicated to continuously learning and adapting to the ever-evolving tech landscape. My goal is to build seamless digital experiences that empower users and drive innovation.
               </div>

               <div className='py-2 text-gray-600'>
               As a MERN enthusiast, I've honed my skills in MongoDB, Express, React, and Node.js, enabling me to architect full-stack solutions that deliver exceptional performance and user engagement. Whether it's crafting interactive front-end components or designing robust back-end APIs, I take pride in my ability to contribute to every phase of the development lifecycle. With a keen eye for detail and a passion for clean code, I'm driven to create impactful digital solutions that leave a lasting impression.
               </div>

               <div className='py-2 text-gray-600 underline cursor-pointer text-sm'>
                 check out some of my latest projects
               </div>
                
            </div>


        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

            <img src="http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.82cd556f.jpg&w=1920&q=75" alt="" />


        </div>





            <div>

            </div>

        </div>

        
        <div className=' w-full py-10 flex justify-center items-center my-10'>
        <button className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200 my-16 w-[250px]"
          onClick={()=>setShouldShow(!shouldShow)}
        >
          Click here to see my Skills

          
        </button>
        </div>

        {
            shouldShow && <DynamicSkills/>
          }


          

          <div className=' w-full py-10 flex justify-center items-center my-10'>         
<button onClick={()=>setshowCustomerReviews(!showCustomerReviews)} className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2v20M19 6l-6.5 6.5M12 2l-6.5 6.5"/>
</svg>

  <span>Read Customer Reviews</span>
</button>
          </div>


       
    </div>


    {
            showCustomerReviews && <DynamicReviews/>
        }
        


    </div>
  )
}

export default About
