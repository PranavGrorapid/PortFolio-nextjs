"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';






const Reviews = () => {

const [comments,setComments]=useState([])


useEffect(()=>{

    getComments()
},[])


const getComments=async()=>{


    
try {
	const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
	console.log("resss",response.data);
    setComments(response.data)
} catch (error) {
	console.error(error);
}

}
  return (

<div className='flex flex-wrap'>
{

    comments.length>0 &&  comments.map((comment:any)=>{

        console.log('comment',comment)

        return (

<div className='w-[400px]  my-5'>


<a
  className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg ml-6 mr-6"
  href=""
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="justify-between sm:flex">
    <div>
      <h5 className="text-xl font-bold text-slate-900">
        {comment.body.substring(200)}
      </h5>
      <p className="mt-1 text-xs font-medium text-slate-600">By{comment.name}</p>
    </div>

    <div className="flex-shrink-0 hidden ml-3 sm:block">
      <img
        className="object-cover w-16 h-16 rounded-lg shadow-sm"
        src="https://github.com/creativetimofficial/argon-design-system/blob/master/assets/img/faces/team-2.jpg?raw=true"
        alt=""
      />
    </div>
  </div>

  

  <dl className="flex mt-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-slate-600">Published</dt>
      <dd className="text-xs text-slate-500">31st June, 2022</dd>
    </div>

    
  </dl>
</a>


        
</div>

        )
    })
}




    
    </div>
  )
}





export default Reviews
