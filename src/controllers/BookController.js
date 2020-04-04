import connection from '../database/connection';
import crypto from 'crypto';

export default {
  async create(req, res) {
    let { name, author, publishing, genre } = req.body;
    let id = crypto.randomBytes(4).toString('HEX');
    genre = genre.toString();

    await connection('books').insert({
        id,
        name,
        author,
        publishing,
        genre
    });

    return res.json({ id });
  },

  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await connection ('books').count();

    const books = await connection('books')
      .limit(10)
      .offset((page-1) * 10)
      .select('*');

    res.header('X-Total-Count', count['count(*)']);

    return res.json(books);
  },

  async delete(req, res) {
    const { id } = req.params;

    const book = await connection('books')
      .where('id', id)
      .select('name')
      .first();

     if (book_name === undefined)
      return res.status(400).json({ error: 'Bad request'});

    await connection('books').where('id', id).delete('*');
    return res.status(204).send();
  }
}