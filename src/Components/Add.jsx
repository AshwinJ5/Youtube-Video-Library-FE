import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import { uploadVideoAPI } from '../../services/allApi';


function Add({setUploadVideoResponse}) {
    const[uploadVideo,setUploadVideo]=useState({
        id:"",name:"",url:"",link:""
    })

    const getYoutubeEmbed =(e)=>{
      const {value}= e.target
      if(value.includes('v=')){
        const videoID= value.split('v=')[1].slice(0,11)
        // console.log(`https://www.youtube.com/embed/${videoID}`);
        setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${videoID}`})
      }else{
        setUploadVideo({...uploadVideo,link:""})
      }
    }
    const handleAdd= async ()=>{
      const{id,name,url,link}=uploadVideo
      if( !id || !name || !url || !link ){
        alert('Please Fill Empty Fields')
      }else{
          const result=await uploadVideoAPI(uploadVideo)
          // console.log(result);
          if(result.status>=200 && result.status<300){
            //close modal
          handleClose()
          //empty input fields
          setUploadVideo({
            id:"",
            name:"",
            url:"",
            link:""
          })
          //after getting success response
          setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
    }
    // console.log(uploadVideo);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <div style={{cursor:"pointer"}} onClick={handleShow} lg={6} className='fw-bolder text-center text-secondary p-5'>
             Upload Video <i class=" ms-3 fa-brands fa-youtube fa-fade"></i>
        </div>
        <div lg={6}  className=' fw-bolder text-center p-5'>
            <Link  className=' text-secondary ' style={{textDecoration:'none'}} to={'/watchhistory'}>
                Watch-History <i class="ms-3 fa-solid fa-clock-rotate-left fa-beat-fade"></i>
            </Link>
             
        </div>
        


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MDBInput style={{color:'white'}} onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})}  type="number"  >
      <div id='helperTextExample' className='form-helper text-light'>
        Enter Video ID
      </div>
    </MDBInput>
        <MDBInput className='mt-5' type="text" style={{color:'white'}}  id='formCounter'  onChange={(e)=>setUploadVideo({...uploadVideo,name:e.target.value})} >
      <div id='helperTextExample' className='form-helper text-light'>
        Enter Video Name
      </div>
    </MDBInput>
        <MDBInput className='mt-5' type="url" style={{color:'white'}}  onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}  id='formCounter'>
      <div id='helperTextExample' className='form-helper text-light'>
        Enter Thumbnail Image URL
      </div>
    </MDBInput>
        <MDBInput className='mt-5' type="url" style={{color:'white'}} onChange={getYoutubeEmbed}   id='formCounter' >
      <div id='helperTextExample'  className='form-helper text-light'>
        Enter Youtube Video URL
      </div>
    </MDBInput>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add Video</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add