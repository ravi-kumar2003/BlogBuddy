import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

export default function Layout() {
    const navigate=useNavigate()
    const logout=()=>{
        navigate('/')
    }

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img src={assets.logo} alt="" className='w-8 sm:w-9 cursor-pointer' onClick={()=>('/')} />
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary-600 text-white rounded-full cursor-pointer'>
            Logout
        </button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
       <Sidebar/>
        <Outlet/>

      </div>
    </>
  )
}
