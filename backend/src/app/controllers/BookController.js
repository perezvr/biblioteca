import Book from '../models/Book';

export default {
  async create(req, res) {
    const { name, author, publishing, genre } = req.body;
    const book = await Book.create({
      name,
      author,
      publishing,
      genre: genre.toString()
    });

    return res.json(book);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, author, publishing, genre } = req.body;

    if (id === undefined)
      return res.status(400).json({ error: 'Book Id not found'});

    const book = await Book.findOne({ where: { id }});

    if (book === null)
      return res.status(400).json({ error: `Cant update. Register Id ${id} not found`});

    await book.update({
      name,
      author,
      publishing,
      genre: genre.toString()
    });

    return res.send();
  },

  async index(req, res) {
    const { page = 1 } = req.query;
    const { count } = await Book.findAndCountAll();

    const books = await Book.findAll({
      offset: (page-1) * 10,
      limit: 10,
    });

    res.header('X-Total-Count', count);

    return res.json(books);
  },

  async delete(req, res) {    
    const { id } = req.params;
    const book = await Book.findOne({ where: { id }});

    if (book === null)
      return res.status(400).json({ error: 'Bad request'});
    
    await book.destroy()

    return res.status(204).send();
  },
}