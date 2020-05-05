import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MessageBox extends Component {
  state = {
    show: false,
  }

  handleClose = () => this.setState({ show: false });

  render() {  
    const {show, title, content} = this.props;    

    return (
      <Modal show={show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>Fechar</Button>
        </Modal.Footer>
      </Modal>  
    );
  }
}