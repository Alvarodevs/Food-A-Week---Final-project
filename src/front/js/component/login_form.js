import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export const LoginForm = () => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food 'a' week Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Login to organize your menu
            <Form>User name</Form>
            <Form>Name</Form>
            <Form>Lastname</Form>
            <Form>Email</Form>
            <Form>Address</Form>
            <Form>Postal code</Form>
            <Form>Phone</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
