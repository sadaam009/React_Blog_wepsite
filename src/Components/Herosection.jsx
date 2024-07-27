import React from 'react'
import city from'../assets/city.jpg'
export default function Herosection() {
  return (
    <div className=' flex justify-between mx-[3rem] items-center mt-[4.6rem] space-x-7 '>
       <div className=" space-y-5">
       <h1 className=' text-[2.8rem] font-Far font-semibold 
       '>Discover the World of <span className='text-[#30aa4c] '>Traveling Blog</span></h1>
       <p className=' text-gray-500'>Join us on a journey through the fascinating world of Traveling Blog <br />
         Our blog offers insightful articles, expert tips, and inspiring stories
         to help you stay informed and engaged. Whether you're a </p>
         <button className='py-2 px-5 text-white rounded-md bg-[#28a745] font-semibold  '>Explore Our Blog</button>
       </div>
       <div className="">
        <img className=' w-[800px]  rounded-md h-[450px]  ' src={city} alt="" />
       </div>
    </div>
  )
}
