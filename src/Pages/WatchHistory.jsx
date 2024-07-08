import React, { useEffect, useState } from 'react'
import { deleteHistoryAPI, getHistoryAPI } from '../../services/allApi'

function WatchHistory() {

  const[history,setHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory=async()=>{
    const result=await getHistoryAPI()
    if(result.status===200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }
  const removeVideoHistory=async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }
  return (
    <>
      <div className="container my-5 d-flex justify-content-between">
        <h2>Watch History</h2>

      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {history?.length>0?history?.map((video,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{video?.name}</td>
            <td><a target='_blank' href={video.link} >{video?.link}</a></td>
            <td>{video?.timeStamp}</td>
            <td><div onClick={()=>removeVideoHistory(video?.id)} className="btn btn-danger"><i class="fa-solid fa-trash"></i></div></td>
          </tr>)):<p className='text-danger fw-bolder'>Nothing to display</p>
          }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory