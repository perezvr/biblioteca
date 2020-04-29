import React, { Component } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './style';

export default class Main extends Component {
  state = { 
    newBook: '',
    books: [],
    loading: false,
  }

  render(){
    return (
      <Container>
      <h1>
        <FaBookOpen />
      </h1>
      <Form onSubmit={this.handleSubmit}>
        <h1>Cadastrar Livro</h1>
        <input type="text" placeholder="Título"/>
        <input type="text" placeholder="Autor"/>
        <input type="text" placeholder="Editora"/>
        <input type="text" placeholder="Gênero"/>
        <SubmitButton loadin={this.state.loading}>Adicionar</SubmitButton>

      </Form>
      </Container>
    );
  }
}