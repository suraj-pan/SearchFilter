import React from 'react'

const Interface = ({data}) => {
    // console.log(data)
  return (
    <div className='flex pt-[60px] bg-slate-200 flex-wrap justify-center gap-3' >
      {data.length === 0 ? (<div>No data found</div>):(
        data.map((post)=>(
        <div className='border rounded border-black sm:mx-2 sm:w-5/6 md:w-3/4  p-3 w-[600px] ' key={post.id}>
            <h2 className='cursor-text text-xl font-bold'>{post.title}</h2>
            <div>{post.body}</div>
        </div>
      ))
      )}
    </div> 
  )
}

export default Interface
