import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = () => {
  const[youtubeLink,useYouTubeLink] = useState(null);
  // API call for fetching youtube key:
  const BackMovies = async ()=>{
    const mainMovieData = await fetch('https://api.themoviedb.org/3/movie/939243/videos?language=en-US', API_OPTIONS);
    const json = await mainMovieData.json();
    const Trailers = json.results.filter(video=>video.type==="Trailer");
    const mainMovieKey = (Trailers==null)?json.results[0]?.key : Trailers[0]?.key; 
    // console.log(mainMovieKey);
    const link = "https://www.youtube.com/embed/"+ mainMovieKey;
    useYouTubeLink(link);
  }

  useEffect(()=>{
    BackMovies();
  },[]);

  return (
    <div className='w-screen'>
      <iframe className='w-screen overflow-hidden m-0 p-0 aspect-video h-auto md:h-screen  bg-gradient-to-b from-black '
       src={youtubeLink + "?&autoplay=1&mute=1"}
       title="YouTube video player"  
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" 
       allowFullScreen>        
       </iframe>

    </div>
  )
}
export default VideoBackground;

//