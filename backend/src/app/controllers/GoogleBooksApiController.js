import axios from 'axios';
import GoogleBookApiKey from '../../config/googleBookApiKey';

class GoogleBooksApiController {
  async get(req, res) {
    const { name } = req.query;

    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${GoogleBookApiKey}`);

    return res.json(response.data.items);
  }
}
export default new GoogleBooksApiController();