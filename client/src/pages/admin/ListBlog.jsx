import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';

export default function ListBlog() {
  const[blogs,setBlogs]=useState([]);

  const fetchBlogs=async()=>{
    setBlogs(blog_data)
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div>
      <h1>All blogs</h1>

             <div className="relative h-4/5 max-w-4xl mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
               <table className="w-full text-sm text-gray-500">
                 <thead className="text-xs text-gray-600 text-left uppercase">
                   <tr>
                     <th scope="col" className="px-2 py-4 xl:px-6">#</th>
                     <th scope="col" className="px-2 py-4">Blog title</th>
                     <th scope="col" className="px-2 py-4 max-sm:hidden">Date</th>
                     <th scope="col" className="px-2 py-4 max-sm:hidden">Status</th>
                     <th scope="col" className="px-2 py-4">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   {blogs.map((blog,index)=>{
                     return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index+1}/>
                   })}
                 </tbody>
               </table>
             </div>
    </div>
  )
}
