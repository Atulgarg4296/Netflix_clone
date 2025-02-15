import React from 'react'
import { img_src } from '../utils/constants'

const MovieCard = ({posterPath}) => {

  return (
    <div className='w-44 px-3 '>
        <img alt='poster' src={img_src+posterPath}></img>
    </div>
  )
}

export default MovieCard
