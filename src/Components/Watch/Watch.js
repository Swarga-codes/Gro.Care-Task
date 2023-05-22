import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import WatchStyles from './Watch.module.css'
function Watch() {
   const location=useLocation()

    useEffect(()=>{
console.log(location.state.data)
    },[])
  return (
    <div className={WatchStyles.Watch}>
    <ReactPlayer url={location.state.data.submission.mediaUrl} controls/>
    </div>
  )
}

export default Watch