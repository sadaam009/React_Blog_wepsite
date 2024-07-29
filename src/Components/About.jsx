import React from 'react'
import img1 from'../assets/travel.avif'
import img2 from'../assets/travelone.avif'
import img3 from'../assets/traveltwo.avif'
export default function About() {
  return (
    <div className=' flex mt-[14rem]  mx-[2.7rem] space-x-5 relative '>
           <div className=" absolute left-[29rem] top-[-10rem] my-[3rem]  ">
            <h1 className=' text-[3rem] font-Far   '>About <span  className=' text-[#30aa4c] '> Us</span></h1>
           </div>
        <div className=" space-y-7 pt-[3rem] ">
            <h1 className=' text-[2.8rem] font-Far font-semibold '>Welcome Mosh <span className='text-[#30aa4c] '>Traveling Blog</span></h1>
            <p className=' text-gray-600'>We are passionate travelers, adventurers, and storytellers dedicated to <br />
                bringing you the best tips, guides, and stories from around the world.
                 Our mission is to inspire and equip you with the </p>
                 <button className='py-2 px-5 text-white rounded-md
                  bg-[#28a745] font-semibold  '>Join Our Journey</button>

        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-1">
            <div className="row-span-7 w-[300px] h-[404px]  bg-blue-400 rounded-md ">
                <img className=' h-full object-fill object-center rounded-md' src={img1} alt="" />
            </div>
            <div className="col-span-2 w-[300px] h-[200px]  bg-blue-400 rounded-md ">
            <img className=' h-full object-fill object-center rounded-md' src={img2} alt="" />
            </div>
         
            <div className=" w-[300px] h-[200px] bg-blue-400 rounded-md ">
            <img className=' h-full object-fill object-center rounded-md' src={img3} alt="" />
            </div>
        </div>
    </div>
  )
}
