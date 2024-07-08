import React, { useEffect, useState } from 'react'
import {Row , Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryAPI, getAllUploadedVideosAPI, updateCategoryAPI } from '../../services/allApi'


function View({uploadVideoResponse,setDropVideoResponse}) {

  const[allVideos,setAllVideos]=useState([])

  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadedVideos=async()=>{
     const result=await getAllUploadedVideosAPI()
     if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
      console.log(result);
     }else{
      console.log("API Failed");
      setAllVideos([])
     }
  }
  const dragOver=(e)=>{
    e.preventDefault()
   }
  const videoDropped= async(e)=>{
    const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,categoryId);
    const {data}=await getAllCategoryAPI()
    const selectedCategory= data.find(items=>items.id===categoryId)
    let result =selectedCategory.allVideos.filter(video=>video.id!==videoId)
    console.log(result);
    let {id,categoryName}= selectedCategory
    let newCategory={id,categoryName,allVideos:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res)
  }


  return (
    <>
        <Row   draggable droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=> videoDropped(e)}>
          {allVideos?.length>0?allVideos.map(video=>(
            <Col xl={3} lg={4}  md={6} sm={12} >
                <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
            </Col>
    )): <p className='text-danger'>Nothing to Display</p>
  }         
        </Row>
    </>
  )
}

export default View