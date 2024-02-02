import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='bg-[#101A33] w-[15%]'>
            <div className='bg-[#1A2342] text-center font-Sansation text-4xl text-white select-none py-3' >
                AROS
            </div>

            <div className='flex flex-col font-Sansation text-white py-3 text-sm'>
                <SidebarLink path='/' content='Dashboard' icon='/icons/apps.png' />
                <SidebarLink path='/' content='Obstacles Detection' />
            </div>
        </div>
    )
}


function SidebarLink({path = '/', content = 'None', icon = '/icons/apps.png'}) {
    return (
        <Link to={path} className='h-7 flex justify-start items-center space-x-2 pl-[10%] hover:bg-[#1A2342]' >
                <img className='w-[20px] h-[20px]' src={icon} />
                <span>{content}</span>
        </Link>
    )
}
