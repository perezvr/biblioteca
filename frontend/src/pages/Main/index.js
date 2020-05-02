import React, { Component } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './style';

export default class Main extends Component {
  state = { 
    title: '',
    author: '',
    publisher: '',
    genre: '',
    loading: false,
  }

  handleInput = async (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { title, author, publisher, genre} = this.state;

    console.log({
      title,
      author,
      publisher,
      genre
    })
  }

  render(){
    const { title, author, publisher, genre} = this.state;
    return (
      <Container>
      <h1>
        <FaBookOpen />
      </h1>
      <Form onSubmit={this.handleSubmit}>
        <h1>Cadastrar Livro</h1>
        <input type="text" name="title" value={title} onChange={ this.handleInput }placeholder="Título"/>
        <input type="text" name="author" value={author} onChange={ this.handleInput } placeholder="Autor"/>
        <input type="text" name="publisher" value={publisher} onChange={ this.handleInput } placeholder="Editora"/>
        <input type="text" name="genre" value={genre} onChange={ this.handleInput } placeholder="Gênero"/>
        <SubmitButton loadin={this.state.loading} >Adicionar</SubmitButton>

      </Form>
      </Container>
    );
  }
}