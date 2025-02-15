import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    // Fetching "popular" movies data and try to dispatch on redux that data:
    const popularMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        const popularMoviesList = json?.results;
        dispatch(addPopularMovies(popularMoviesList));
  
      }
      useEffect(()=>{
        popularMovies();
      },[])

}
export default usePopularMovies;