import React from "react";
import { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";


function Session({ session, dateTime }) {
  const [show, setShow] = useState(false);
  const [isLoggedIn] = useState(() =>
    localStorage.getItem("currentUser") ? true : false
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!session) {
    return <>Loading...</>;
  }

  return (
    <div className="row bs">
      <div className="col-4">
        <img src={session.images[0]} className="smallimg" alt="small" />
      </div>
      <div className="col-7">
        <h1>{session.name}</h1>
        <b>
          {" "}
          <p>{session.description}</p>
          <p>Duration: {session.duration} mins</p>
          <p>Price: £{session.price}</p>
        </b>
      </div>
      <div style={{ display: "left", justifyContent: "flex-end" }}>
        {dateTime && (
          <button
            onClick={
              isLoggedIn
                ? () =>
                    (window.location.href = `/sessions/${session._id}?datetime=${dateTime}`)
                : () => (window.location.href = "/Login")
            }
            className="btn btn-primary m-2"
          >
            BOOK NOW
          </button>
        )}
        <button className="btn btn-primary m-2" onClick={handleShow}>
          View Details
        </button>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title className="text">{session.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {session.images.map((image, index) => {
              return (
                <Carousel.Item key={index}>
                  <img className="d-block" src={image} alt="second slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{session.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Session;
