import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // const img_src = movies?.[0].poster_path;
    return (
    <div>
        <h1 className='text-xl font-bold py-5 px-5 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
        {movies && 
        movies.map(movie=> 
        <MovieCard key={movie.id} posterPath = {movie.poster_path}/>)}
        </div>
        {/* </div> */}
        </div>
        </div>
  )
}

export default MovieList