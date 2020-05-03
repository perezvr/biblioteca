import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Container, SubmitButton, Form } from './style';
import booksApi from '../../services/booksApi';

export default class BookRegister extends Component {
  state = { 
    title: '',
    author: '',
    publisher: '',
    genre: '',
    loading: false,
    show: false,
  }

  handleInput = async (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value});
  }

  handleClose = () => this.setState({show: false});

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({
      loading: true,
    })

    const { title, author, publisher, genre } = this.state;

    booksApi.post('/books', {
      title,
      author,
      publisher,
      genre
    })    

    this.setState({
      title: '',
      author: '',
      publisher: '',
      genre: '',
      loading: false,
      show: true
    })
  }

  render(){
    const { title, author, publisher, genre, show} = this.state;

    return (
      <Container>
        <Modal show={show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Bookswap</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Livro cadastrado com sucesso na sua biblioteca!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Fechar</Button>
          </Modal.Footer>
        </Modal>  
        <Form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={title} onChange={ this.handleInput }placeholder="Título"/>
          <input type="text" name="author" value={author} onChange={ this.handleInput } placeholder="Autor"/>
          <input type="text" name="publisher" value={publisher} onChange={ this.handleInput } placeholder="Editora"/>
          <input type="text" name="genre" value={genre} onChange={ this.handleInput } placeholder="Gênero"/>
          <SubmitButton loading={this.state.loading} >Adicionar</SubmitButton>
        </Form>
      </Container>
    );
  }
}