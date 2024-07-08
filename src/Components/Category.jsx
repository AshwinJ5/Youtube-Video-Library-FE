import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdb-react-ui-kit';
import { addCategoryAPI, deleteCategoryAPI, getAllCategoryAPI, getVideoAPI, updateCategoryAPI } from '../../services/allApi';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';



function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[categoryName,setCategoryName]=useState("")
  const[allCategory,setAllCategory]=useState([])

  const handleAdd= async()=>{
    if (categoryName) {
      const result= await addCategoryAPI({categoryName,allVideos:[]})
      if (result.status>=200 && result.status<300) {
        handleClose()
        setCategoryName("")
        getCategory()
      } else {
        alert(result.message)
      }
      
    } else {
      alert("Please Fill Category Field")
    }
  }
  useEffect(()=>{
    getCategory()
  },[dropVideoResponse])
  
  const getCategory=async()=>{
    const {data}=await getAllCategoryAPI()
    setAllCategory(data)
  }

  const deleteCategory= async(id)=>{
    await deleteCategoryAPI(id)
    getCategory()
  }
 const videoDrop=async (e,categoryId)=>{
  const videoId=e.dataTransfer.getData("videoId")
  console.log("id  :" +videoId+"    cat  :"+categoryId);
  const {data}=await getVideoAPI(videoId)

  const selectedCategory=allCategory.find(item=>item.id===categoryId)
  selectedCategory.allVideos.push(data)
  // console.log(selectedCategory);
  await updateCategoryAPI(categoryId,selectedCategory)
  getCategory()
  console.log(allCategory);
 }

 const dragOver=(e)=>{
  e.preventDefault()
 }
// const videoDropped= async()=>{
//   const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
//   console.log(videoId,categoryId);
//   const {data}=await getAllCategoryAPI()
//   const selectedCategory= data.find(items=>items.id===categoryId)
//   let result =selectedCategory.allVideos.filter(video=>video.id!==videoId)
//   console.log(result);
// }
const videoDragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
}
  return (
    <>
    
      <div onClick={handleShow} className="btn btn-secondary w-100 m-3">
        Add Category
      </div>

      {allCategory?.length>0?allCategory.map(categories=>(
      <div className="border-light  card  rounded mb-3 p-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDrop(e,categories?.id)}>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className='text-white'>{categories?.categoryName}</h6>
          <button onClick={()=>deleteCategory(categories?.id)} variant="danger"><i class="fa-solid fa-trash"></i></button>

        </div>

<Row>
{ categories?.allVideos.length>0?categories?.allVideos.map(card=>(

 <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,categories.id)}>
  <VideoCard video={card} insideCategory={true}/>
  </Col>
  ))
  :null}
</Row>

      </div>
      )):<p className='text-danger fw-bolder'> Nothing to display</p>}



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MDBInput className='mt-5' onChange={(e)=>setCategoryName(e.target.value)} type="text" style={{color:'white'}}  id='formCounter'>
      <div id='helperTextExample' className='form-helper text-light'>
        Enter Category Name
      </div>
    </MDBInput>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add Category</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category