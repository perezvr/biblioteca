import React, { Component } from 'react';
import MessageBox from '../../containers/MessageBox/index';
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
    const { title, author, publisher, genre, show } = this.state;
    console.log(`${1} ${show}`);

    return (
      <Container>
        <MessageBox show={show} title="Titulo" content="Conteudo"/>
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