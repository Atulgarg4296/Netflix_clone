import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    // Fetch "Top Rated Movies" and dispatch an action to redux store:
    const TopRatedMovies=async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      const topRatedMoviesList = json.results;
      // console.log(topRatedMoviesList);
      dispatch(addTopRatedMovies(topRatedMoviesList));
    }
    useEffect(()=>{
      TopRatedMovies();
    },[])
}
export default useTopRatedMovies;