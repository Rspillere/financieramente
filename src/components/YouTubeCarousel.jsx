import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const YOUTUBE_API_KEY = 'AIzaSyAonHdcoG1RnUOUxoTlFDX2mx1Mcp-n7Lo';
const CHANNEL_ID = 'UCt16RZgWCCv90coEqHXonBw';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      partialVisibilityGutter: 20
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10
    }
  };
  
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
          setError('Failed to fetch videos. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchVideos();
    }, []);
  
    return (
      <div className="carousel-container xl:pt-52 md:pt-24 pt-12 px-8 mx-auto max-w-7xl relative">
        <div className=' bg-gradient-to-r from-transparent to-white absolute w-1/4 h-4/5 z-10 right-8'></div>
        <h2 className="text-3xl font-bold mb-6">Últimos Videos</h2>
       
          <Carousel 
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible
            dotListClass="custom-dot-list-style"
          >
            {videos.map(video => (
              <div key={video.id.videoId} className="video-item rounded-lg shadow-md p-4 md:mx-6 mb-10 mt-10">
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full h-auto"
                  />
                </a>
                <h3 className="text-xl mt-4">{video.snippet.title}</h3>
              </div>
            ))}
          </Carousel>
        
      </div>
    );
  };
  
  export default YoutubeCarousel;

