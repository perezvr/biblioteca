import React, { Component } from 'react';
import MessageBox from '../../components/MessageBox/index';
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
    modal: {
      title: '',
      content: ''
    }
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
    }).then((sucess) => {
      this.setState({
        title: '',
        author: '',
        publisher: '',
        genre: '',
        loading: false,
        show: true,
        modal: {
          title: 'Sucesso!',
          content: `"${title}" cadastrado com sucesso na sua biblioteca!`
        }
      })
    }).catch((err) => {
      this.setState({
        title: '',
        author: '',
        publisher: '',
        genre: '',
        loading: false,
        show: true,
        modal: {
          title: 'Erro!',
          content: `Ocorreu um erro ao tentar cadastrar o livro na sua biblioteca.`
        }
      })
    });   
    


  }

  render(){
    const { title, author, publisher, genre, modal, show } = this.state;

    return (
      <Container>
        <MessageBox show={show} title={modal.title} content={modal.content}/>
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