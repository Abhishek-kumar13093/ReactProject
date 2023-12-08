import React from 'react';

const Header = () => {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1200px] py-[15px] item center  flex justify-between  max auto'>
            <div className='text-3xl font-bold'>
                WsCube Tech
            </div>
            <ul className='flex text-white gap-10'>
                <li>Home</li>
                <li>Company</li>
                <li>Resurces</li>
                <li>About</li>
                <li>contact</li>
            </ul>

        </div>
    </div>
    
  )
}

export default Header;