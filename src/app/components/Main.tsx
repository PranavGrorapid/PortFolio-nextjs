import Link from 'next/link';
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Main = () => {




  return (

    <div>

    <div className='pt-36 md:py-12'>

    </div>
   
<div id='home' className='w-full h-screen text-center  py-28'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center py-10'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-green-500'>PRANAV</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 w-[50%]  m-auto'>

          Hello! I'm a full stack developer. My portfolio c demonstrates the fusion of captivating front-end design with powerful back-end functionality. Let's work together to bring exceptional digital experiences to life!

             </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/pranav-p-aa7ba021a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/PranavGrorapid'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/#resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}






export async function getStaticProps() {

    try{

        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const posts = await res.json()
    
        console.log('posttsssssss',posts);
        
       
        // By returning { props: { posts } }, the Blog component
        // will receive `posts` as a prop at build time
        return Promise.resolve({ 
          props: {
            posts,
          },
        })
    }

    catch(err){

        console.log('errr',err);
        
    }
   
  }

export default Main



