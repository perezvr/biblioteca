import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MessageBox extends Component {
  state = {
    show: true,
  }

  componentWillUnmount() {
    this.setState = { 
      show: true,
    }
  }

  handleClose = () => { this.setState({ show: false }) };
  
  render() {  
    const { show, title, content } = this.props;
      
    const showMesmo = (show && this.state.show);

    return (
      <Modal show={showMesmo} onHide={this.handleClose} animation={false}>
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