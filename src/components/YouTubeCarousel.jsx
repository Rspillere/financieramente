import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const YOUTUBE_API_KEY = 'AIzaSyAonHdcoG1RnUOUxoTlFDX2mx1Mcp-n7Lo';
const CHANNEL_ID = 'UCt16RZgWCCv90coEqHXonBw';

  const YoutubeCarousel = () => {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`, {
              params: {
                key: YOUTUBE_API_KEY,
                channelId: CHANNEL_ID,
                part: 'snippet',
                order: 'date',
                maxResults: 5
              }
            }
          );
          setVideos(response.data.items);
        } catch (error) {
          console.error('Error fetching videos', error);
        }
      };
  
      fetchVideos();
    }, []);
  
    return (
      <div className="carousel-container xl:pt-52 md:pt-24 pt-12 px-8 mx-auto max-w-7xl relative">
        <h2 className="text-3xl font-bold mb-6">Últimos Videos</h2>
        <div className="bg-gradient-to-r from-transparent to-white absolute w-1/4 h-4/5 z-10 right-8" />
        <div className="bg-gradient-to-l from-transparent to-white absolute w-1/4 h-4/5 z-10 left-8" />
        <Carousel
          showThumbs={true}
          showStatus={false}
          showIndicators={true}
          infiniteLoop
          autoPlay
          emulateTouch
          swipeable
          interval={4000}
          showArrows={true}
          centerMode={true}
          centerSlidePercentage={50}
        >
          {videos.map((video) => (
            <div key={video.id.videoId} className="flex justify-center mb-10 mt-10">
              <div className="video-item rounded-lg shadow-md p-4 mx-2 md:mx-4 lg:mx-6 w-full max-w-md">
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={`Video de YouTube: ${video.snippet.title}`}
                  className="w-full h-auto"
                  />
                </a>
                <h3 className="text-xl mt-4">{video.snippet.title}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };
  
  export default YoutubeCarousel;

