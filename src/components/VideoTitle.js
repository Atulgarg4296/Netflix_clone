import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='md:py-56 md:px-36 py-20 px-6  absolute'>
      <h1 className='md:text-6xl text-xl font-semibold text-white '>{title}</h1>
      <p className='md:w-1/3 w-1/2 hidden md:block pt-3 text-white text-sm md:text-lg'>{overview}</p>
      <div className='pt-4'>
        <button className='bg-white md:px-10 px-4 rounded md:h-10 h-8 font-bold'>Play</button>
        <button className='px-2 bg-white rounded mx-2 md:px-10 h-8  md:h-10'>More info</button>
      </div>
      </div>
  )
}

export default VideoTitle