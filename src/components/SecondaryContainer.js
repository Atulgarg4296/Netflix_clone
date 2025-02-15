import React, { useEffect } from 'react'
import MovieList from './MovieList';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies, addTopRatedMovies, addUpComingMovies } from '../utils/moviesSlice';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';

const SecondaryContainer = () => {
    const movies = useSelector(store=>store.movies);
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

   
  return (
    <div className='md:min-h-screen min-h-full bg-black'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies}/>
    </div>
  )
}

export default SecondaryContainer;