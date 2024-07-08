import React, { useState } from 'react'
import View from '../Components/View';
import Category from '../Components/Category';
import Add from '../Components/Add';

function Home() {

  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const [dropVideoResponse,setDropVideoResponse]= useState({})
  return (
    <>
    <div className="container my-5 d-flex justify-content-between">
      <Add setUploadVideoResponse={setUploadVideoResponse}/>
    </div>
    
    <div className="w-100 my-3 container-fluid row">
      <div className='px-5 col-lg-9 py-5'>
      <h2 className='py-5'>All Videos</h2>
      <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />
      </div>
      <div className='px-5 col-lg-3'>
      <h2>Your Category</h2>
      <Category dropVideoResponse={dropVideoResponse} />
      </div>
    </div>
    


     
    </>
  )
}


export default Home