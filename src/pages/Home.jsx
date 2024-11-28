import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'

function Home() {
  const [addstatus,setAddStatus]=useState({})
  const [catVDstatus ,setcatVDstatus]=useState({})
  return (
    <>
      <div className='container d-flex justify-content-between'>
        <Add setAddStatus={setAddStatus}/>
        <Link to={'/watchhistory'} style={{textDecoration:'none'}}><h5><span className='d-md-inline d-none'>Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft} className='me-2'/></h5></Link>
      </div>

      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-9">
            <Allvideos addstatus={addstatus} setcatVDstatus={setcatVDstatus} />
          </div>
          <div className="col-md-3">
          <Category  catVDstatus={catVDstatus}/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home