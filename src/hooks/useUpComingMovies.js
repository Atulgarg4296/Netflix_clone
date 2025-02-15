import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useUpComingMovies=()=>{
    const dispatch = useDispatch();

    // Fetch the "Upcoming movies" data and dispatch into redux store:
    const UpComingMovies = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      const upComingMoviesList = json.results;
      console.log(upComingMoviesList); 
      dispatch(addUpComingMovies(upComingMoviesList));

    }
    useEffect(()=>{
      UpComingMovies();
    },[])
   


}
export default useUpComingMovies;