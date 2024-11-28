import React from "react";
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="py-5 px-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h4 className="text-warning"><FontAwesomeIcon icon={faVideo}  className="me-3" />Media Player</h4>
            <p style={{textAlign:'justify'}} className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima atet soluta? Ipsa officiis consectetur delectus dolorem accusantium!Facilis eius ab soluta omnis blanditiis autem adipisci nemo vermaxime molestias.Minima atet soluta? </p>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h4>Links</h4>
                <Link  to={'/'}><p className="mt-3">Landing page</p></Link>
                <Link to={'/home'}><p>Home</p></Link>
                <Link to={'/watchhistory'} ><p>Watch History</p></Link>
            </div>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h4>Links</h4>
                <p className="mt-3">React</p>
                <p>React Bootstrap</p>
                <p>Bootswatch</p>
            </div>
          </div>
          <div className="col-md-4 px-md-5 mt-4 mt-md-0">
            <h4>Contact Us</h4>
            <div className="mt-3 d-flex">
              <input type="text" placeholder="Email id" className="form-control"/>
              <button className="btn btn-warning ms-3">Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
              <FontAwesomeIcon icon={faWhatsapp} className="fa-2x"/>
              <FontAwesomeIcon icon={faInstagram} className="fa-2x"/>
              <FontAwesomeIcon icon={faXTwitter} className="fa-2x"/>
              <FontAwesomeIcon icon={faFacebook} className="fa-2x"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
