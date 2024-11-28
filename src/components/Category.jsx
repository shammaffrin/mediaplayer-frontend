import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import Videocar from './Videocar'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addcat, delcat, updatecat } from '../services/allApi';
import { getcat } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category({catVDstatus}) {
  const [show, setShow] = useState(false);
  const [catname ,setcatname]=useState("")
  const [allcat,setallcat]=useState([])
  const [catstatus ,setcatstatus]=useState({})
  const [deletestatus,setdeletestatus]=useState([])
  const [catupdatestatus ,setcatupdatestatus]=useState({})

  const handleClose = () => {setShow(false);handlecancel()}
  const handleShow = () => setShow(true);

  console.log(catname);

  const handlecancel =()=>{
    setcatname("")
  }
  const getallcat =async()=>{
    const result =await getcat()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setallcat(result.data)
      
    }
  }
  console.log(allcat);

  const deletecat =async(id)=>{
  const result=await delcat(id)
    if(result.status>=200  && result.status<300){
      setdeletestatus(result)
    }
  }

  const videoOver =(e)=>{
    //reload
    e.preventDefault()
  }

  const videoDrop =async(e ,categorydetails)=>{
    console.log(categorydetails);
    const videodetails =JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videodetails);
    /* categorydetails.allVideos=videodetails
    console.log(videodetails); */
    
     if(categorydetails.allVideos.find((item)=>item.id==videodetails.id)){
      alert('video already in the same category')
     }
     else{
      categorydetails.allVideos.push(videodetails)
      console.log(categorydetails);
      const result =await updatecat(categorydetails.id,categorydetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        setcatupdatestatus(result)
      }
     }
  }

  const videoDrag =(e,videoDetails ,categorydetails)=>{
    console.log(videoDetails,categorydetails);
    const details ={
      videoDetails,
      categorydetails
    }
    e.dataTransfer.setData("Details",JSON.stringify(details))
  }


  
  useEffect(()=>{
    getallcat()
},[catstatus,deletestatus,catupdatestatus ,catVDstatus])


  const handleADD =async()=>{
    if(!catname){
      toast.error('please fill the category name')
    }
    else{
      const reqBody={
        category :catname,
        allVideos:[]
      }
      const result =await addcat(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('category added successfully')
        handleClose()
        setcatstatus(result)
      }
      else{
        toast.error('something went wrong')
      }
      
    }
  }


  

  return (
    <>
    <h4 className='mt-5'>Category</h4>
    <button onClick={handleShow} className='btn btn-warning mt-4 w-100'>Add category</button>

    {allcat?.length>0 ?
    allcat?.map((item)=>(
    <div className='border border-secondary p-3 rounded mt-4' droppable onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e,item)}>
      <div className="d-flex justify-content-between">
        <h6>{item?.category}</h6>
        <button className='btn btn-danger' onClick={()=>deletecat(item?.id)}><FontAwesomeIcon icon={faTrashCan}  /></button>
      </div>
      { item?.allVideos.length>0 &&
          item?.allVideos.map((video)=>(
             <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
              <Videocar  videoDetails={video}  present ={true} />
              </div>
            
            ))
         }
    </div>
    ))
     :
    <h5 className='text-center text-danger mt-4'>No Category Added Yet....</h5>
}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 border border-dark rounded'>
            <input type="text" placeholder='Enter Category Name' className='form-control' onChange={(e)=>setcatname(e.target.value)} value={catname} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlecancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleADD}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    
    <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Category