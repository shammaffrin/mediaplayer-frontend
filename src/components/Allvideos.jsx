import React, { useEffect, useState } from 'react'
import Videocar from './Videocar'
import { getVideoApi, updatecat } from '../services/allApi'

function Allvideos({addstatus ,setcatVDstatus}) {
  const[video,setVideo]=useState([])
  const[viewdel,setviewdel]=useState({})

  const getallVideo =async()=>{
    const result =await getVideoApi()
    // console.log(result);
    setVideo(result.data)
  }
   //console.log(video);

   const dragOver=(e)=>{
    e.preventDefault()
   }
    
   const videoDrop = async(e) =>{
     const {videoDetails,
      categorydetails} =JSON.parse(e.dataTransfer.getData("Details"))
      console.log(videoDetails , categorydetails );  
      
      let result =  categorydetails.allVideos.filter((item)=>item.id!=videoDetails.id)

      const reqBody ={
        category:categorydetails.category,
        allVideos:result,
        id:categorydetails.id
      }
      const response =await updatecat(categorydetails.id,reqBody)
      console.log(response);
      if(response.status>=200 && response.status<300){
        setcatVDstatus(result)
      }
      
   }
  
  useEffect(()=>{
    getallVideo()
  },[addstatus ,viewdel])

  return (
    <>
      <h4 className='mt-5'>All Videos</h4>

      
      {video?.length>0 ?
        <div className="container-fluid mt-5" droppable onDragOver={(e)=>dragOver(e)}  onDrop={(e)=>videoDrop(e)} >
        <div className="row">
          
         {video?.map((item)=>(
          <div className="col-md-3 p-2">
          <Videocar videoDetails={item} setviewdel={setviewdel} /> 
          </div>
         ))}
      
        </div>
      </div>

        :

      <div className='container-fluid mt-5'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png" alt="no-image" className='w-100'/>
            <h5 className='text-center text-danger'>No Videos Added Yet....</h5>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>}
    </>
  )
}

export default Allvideos