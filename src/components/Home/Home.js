import React, { useState } from 'react'
import {AdBanner, YoutubeLogo} from '../../Assets/ImageIndex'
import './Home.css'
import Video from './Video'
import VideoData from './Video.json'

const Home = () => {


  const categoryData =["All", "Gaming", "Javascript", "Python", "Music", "Mixes", "Lives", "Comedy", "Programming", "Lofi Songs", "Couples", "Teenage Programmer", "Arijit Singh", "T-Series"]
  const {videos} = VideoData
  const [category, setCategory] = useState("All")
  
  const [onDisplay, setOnDisplay] = useState(videos)
  const handleCategory = (tag) =>{
    setCategory(tag)
    if(tag ==="All"){
      setOnDisplay(videos)
      return
    }
    setOnDisplay(videos.filter((video) => video.category === tag))
  }

  return (
    <>
      <div className='homeContainer'>
        <div className='categoryContainer'>
          {categoryData.map((tab) =>{return<h3 className={`categoryTab ${category === tab && 'active'}`} onClick={() => setCategory(tab)} key={tab}>{tab}</h3>})}
        </div>
        <div className='homeBanner'>
          <img src={AdBanner} alt="Ad Banner" className='youtubeAdBanner'/>
          <div className='infoBox'>
            <div>
              <img src={YoutubeLogo} alt="Youtube Logo" />
              <h2>Youtube Premium</h2>
            </div>
            <h1>Watch what ever you love</h1>
            <button>GET IT NOW</button>
          </div>
        </div>
        <div className='videoContainer'>
          {onDisplay.map((video) =>{return <Video video={video} key={video.image}/>})}
        </div>
      </div>
    </>
  )
}

export default Home
