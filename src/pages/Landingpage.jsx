import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={6}>
            <h4>
              Welcome to <span className="text-warning">Media Player</span>
            </h4>
            <p style={{ textAlign: "justify" }} className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              perferendis quos vel harum placeat! Aspernatur fugit, ad error
              voluptate iure ex iusto consequuntur, inventore quidem, quisquam
              tenetur odit praesentium placeat. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Atque veritatis repellendus
              dignissimos in maxime reiciendis quibusdam quis. Officia velit
              quas officiis possimus quisquam tenetur vero, impedit similique
              explicabo exercitationem id.
            </p>
            <Link to={'/home'}><button className="btn btn-warning mt-4">Get Started</button></Link>
          </Col>

          <Col sm={12} md={6} className="d-flex justify-content-center">
            <img
              src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif"
              alt="no-image"
              className="w-50"
            />
          </Col>
        </Row>
      </Container>

      <div className="container-fluid mb-4">
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3 className="text-center">Features</h3>
            <div className="row mt-5">
              <div className="col-md-4 mt-4 mt-md-0">
                <Card style={{ width: "100%" }} className="p-3">
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/e2/5b/86/e25b8652a2b0afc87bfa4afdef3e76b3.gif" className="w-100" height={'300px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 mt-4 mt-md-0">
                <Card style={{ width: "100%" }} className="p-3">
                  <Card.Img variant="top" src="https://media4.giphy.com/media/t9jQmDqlXVCWk/200w.gif?cid=6c09b952hpz03svbmrgo7rogtyegelviauhhz0rrajzsb293&ep=v1_gifs_search&rid=200w.gif&ct=g" className="w-100" height={'300px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>  
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 mt-4 mt-md-0">
              <Card style={{ width: "100%" }} className="p-3">
                  <Card.Img variant="top" src="https://media0.giphy.com/media/k7AEaKLU0maVvEpgPG/200w.gif?cid=6c09b952nbhrh8t46ytby11qvlfw71uj28b9qyuch69bvqed&ep=v1_gifs_search&rid=200w.gif&ct=g" className="w-100" height={'300px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="d-flex col-md-10 border p-4">
            <div className="col-md-6">
              <h3 className="text-warning mt-5">Simple fast and Powerful</h3>
              <p><span style={{fontSize:'30px'}}>Play Everything:</span>amet consectetur adipisicing elit. Inventore rem accusamus veniam, repellendus incidunt necessitatibus ad quis ullam perspiciatis laboriosam minus alias quidem praesentium sunt perferendis suscipit vel in esse!</p>
              <p><span style={{fontSize:'30px'}}>Play Everything:</span>amet consectetur adipisicing elit. Inventore rem accusamus veniam, repellendus incidunt necessitatibus ad quis ullam perspiciatis laboriosam minus alias quidem praesentium sunt perferendis suscipit vel in esse!</p>
              <p><span style={{fontSize:'30px'}}>Play Everything:</span>amet consectetur adipisicing elit. Inventore rem accusamus veniam, repellendus incidunt necessitatibus ad quis ullam perspiciatis laboriosam minus alias quidem praesentium sunt perferendis suscipit vel in esse!</p>
            </div>
            <div className="mt-5 col-md-6 ms-5 d-flex justify-content-center align-items-center"><iframe width="400" height="350" src="https://www.youtube.com/embed/-2RAq5o5pwc?si=aqW6n1rpwZyGjH2t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
