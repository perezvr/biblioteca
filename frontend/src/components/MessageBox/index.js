import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

function MessageBox({show, title, content, onHide}) {
    return (
      <Modal show={show} onHide={onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MessageBox;