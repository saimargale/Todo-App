import React from 'react'

const Navbar = () => {
    return (
      <nav className='flex justify-between bg-[#E3F2FD] text-black py-2'>
            <div className="logo">
                <div className="font-bold text-xl mx-8">TaskTrack</div>
            </div>
            <ul className="flex gap-10 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
      </nav>
    );
  };
  

export default Navbar