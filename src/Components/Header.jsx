import React from 'react'

export default function Header() {
  return (
    <div className=' flex justify-between mt-5 mx-[3rem] items-center '>
        <h1 className=' text-[1.6rem] font-Far font-semibold '>Digital <span className='text-[#5dee7f] '> Dynamo</span></h1>
        <div className=" flex space-x-4">
          <li className=' list-none text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white  '>Home</li>
          <li className=' list-none text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white  '>About</li>
          <li className=' list-none text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white  '>Blog</li>
          <li className=' list-none text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white  '>Categories</li>
          <li className=' list-none text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white  '>Contect</li>

        </div>
        <div className="">
            <button className='py-2 px-5 text-white rounded-md bg-[#28a745] font-semibold  '>Subscribe Now</button>
        </div>
    </div>
  )
}
