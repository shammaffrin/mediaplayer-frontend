import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addhistory, removeVideo } from '../services/allApi';






function Videocar({videoDetails, setviewdel ,present}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ 
    setShow(true);
    let caption =videoDetails?.caption;
    let url =videoDetails?.embedlink;
    const time =new Date()
    console.log(time);
    const timestamp =new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second :'2-digit'}).format(time)
    console.log(timestamp);
    
    const reqBody ={
      caption,
      url,
      timestamp
    }
    console.log(reqBody);
    

   const result =await addhistory(reqBody)
   console.log(result);
  
}

  const handleDelete = async(id)=>{
    const result =await removeVideo(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setviewdel(result)
    }
    
  }

  const videoDrag =(e,VDetails)=>{
    console.log(e);
    console.log(VDetails);
    e.dataTransfer.setData("videoDetails",JSON.stringify(VDetails))
    
  }


  return (
    <>
    <Card style={{ width: '100%'}} className='mt-3' draggable onDragStart={(e)=>videoDrag(e,videoDetails)} >
      {!present && <Card.Img onClick={handleShow} variant="top" src={videoDetails?.Imgurl} style={{height:'250px',width: '100%' }}/>}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title style={{fontSize:'16px'}}>{videoDetails?.caption} </Card.Title>
        {!present && <Button type='button' onClick={()=>handleDelete(videoDetails?.id)} variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>}
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${videoDetails?.embedlink}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Videocar