import { faCloudArrowUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addVideoApi  } from "../services/allApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  const [show, setShow] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    Imgurl: "",
    embedlink: "",
  });
  console.log(videoDetails);

  const handleClose = () => {
    setShow(false);
    handleCancel();
  };
  const handleShow = () => setShow(true);

  const handleCancel = () => {
    setVideoDetails({
      caption: "",
      Imgurl: "",
      embedlink: "",
    });
  };

  const handleAdd = async () => {
    const { caption, Imgurl, embedlink } = videoDetails
    if (!caption || !Imgurl || !embedlink) {
      toast.info("please fill the form");
    } else {
      if (embedlink.startsWith("https://youtu.be/")) {
        //https://youtu.be/eST5WLroObY?si=db4n9xcbmrr3ZwD9
        let link = `https://www.youtube.com/embed/${embedlink.slice(17,28)}`;
        console.log(link);
        const result = await addVideoApi ({ caption, Imgurl, embedlink: link });
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          toast.success("video added successfully");
          handleClose();
          setAddStatus(result)
        } else {
          toast.error("something went wrong");
          handleCancel();
        }
      } else {
        //https://www.youtube.com/watch?v=eST5WLroObY
        let link = `https://www.youtube.com/embed/${embedlink.slice(-11)}`;
        console.log(link);
        const result = await addVideoApi({ caption, Imgurl, embedlink: link });
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          toast.success("video added successfully");
          handleClose();
          setAddStatus(result)
        } else {
          toast.error("something went wrong");
          handleCancel();
        }
      }
    }
  }

  return (
    <>
      <h5>
        <span className="d-md-inline d-none">Upload New Video</span>
        <FontAwesomeIcon
          onClick={handleShow}
          icon={faCloudArrowUp}
          className="ms-3"
        />
      </h5>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning ">
            <FontAwesomeIcon
              icon={faFilm}
              style={{ color: "#cd6a18" }}
              className="ms-2"
            />
            Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className="border border-secondary p-3 rounded">
            <div className="mb-3">
              <input
                type="text"
                value={videoDetails.caption}
                placeholder="Video Caption"
                className="form-control"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={videoDetails.Imgurl}
                placeholder="Video Image"
                className="form-control"
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, Imgurl: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={videoDetails.embedlink}
                placeholder="Video URL"
                className="form-control"
                onChange={(e) =>
                  setVideoDetails({
                    ...videoDetails,
                    embedlink: e.target.value,
                  })
                }
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  );
}

export default Add;
