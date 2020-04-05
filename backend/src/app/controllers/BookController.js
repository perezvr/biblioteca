import apiKey from '../../../gbapi';
import axios from 'axios';
import Book from '../models/Book';

export default {
  async create(req, res) {
    const { name, author, publishing, genre } = req.body;

    await Book.create({
      name: name,
      author: author,
      publishing: publishing,
      genre: genre.toString()
    });

  },

  async index(req, res) {
    // const { page = 1 } = req.query;
    // const [count] = await connection ('books').count();

    // const books = await connection('books')
    //   .limit(10)
    //   .offset((page-1) * 10)
    //   .select('*');

    // res.header('X-Total-Count', count['count(*)']);

    // return res.json(books);
  },

  async delete(req, res) {
    // const { id } = req.params;

    // const book = await connection('books')
    //   .where('id', id)
    //   .select('name')
    //   .first();

    //  if (book_name === undefined)
    //   return res.status(400).json({ error: 'Bad request'});

    // await connection('books').where('id', id).delete('*');
    // return res.status(204).send();
  },
  // retorna as informações do livros a partir da API do google books. Necessário ter uma apiKey
  async getInfo(req, res) {
    const { name } = req.query;

    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${apiKey}`);

    return res.json(response.data.items);
  }
}