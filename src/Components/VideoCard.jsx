import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allApi';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async () => {
      setShow(true);
      const{name,link,}=video

      let date=new Date
      let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:"2-digit",second:"2-digit"}).format (date)

      let videoHistory={name,link,timeStamp}
      await addVideoHistoryAPI(videoHistory)
    };
    const deleteVideo= async (id)=>{
      await deleteVideoAPI(id)
      setDeleteVideoResponse(true)
    }
    const dragStarted=(e,id)=>{
      console.log("Drag started"+id);
      e.dataTransfer.setData("videoID",id)
    }

  return (
    <>
        <Card draggable onDragStart={(e)=>dragStarted(e,video?.id)} className='border d-flex justify-content-around border-light my-3' style={{ width: '14rem'}}>
      <Card.Img variant="top" onClick={handleShow} src={video?.url} width={"100%"} height={"200px"}/>
      <Card.Body className=' text-end'>
        <Card.Title className='text-center'>{video?.name}</Card.Title>

        {insideCategory?null:<Button onClick={()=>deleteVideo(video?.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button>}
      </Card.Body>
    </Card>

    


{/* Video Modal */}
    <Modal  
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header   closeButton>
          <Modal.Title>Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="534" src={`${video?.link}?autoplay=1`} title="Gudilo Badilo Full VideoSong |DJ Duvvada Jagannadham || Allu Arjun DSP  Hits | Aditya Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard