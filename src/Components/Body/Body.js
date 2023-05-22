import React, { useEffect, useState } from 'react'
import VideoCard from '../VideoCards/VideoCards'
import bodyStyles from './Body.module.css'
function Body() {
    const[postsData,setPostsData]=useState([]);
    const[pageNumber,setPageNumber]=useState(0);
    const fetchData=async()=>{
        const res=await fetch(`https://internship-service.onrender.com/videos?page=${pageNumber}`);
        const data=await res.json();
        console.log('My data:',data.data.posts)
        setPostsData(data.data.posts)
    }
    useEffect(()=>{
        fetchData();
    },[pageNumber])
  return (
    <div className={bodyStyles.Body}>
    <div className={bodyStyles.videos_display}>
    {
        postsData.map(post=>(
            <VideoCard post={post}/>
        ))
    }
    </div>
    <div className="paginate">
    <button onClick={()=>{if(pageNumber>0)
        setPageNumber(pageNumber-1)
    }}>Prev</button><button onClick={()=>setPageNumber(pageNumber+1)}>Next</button>
    </div>
    </div>
  )
}

export default Body