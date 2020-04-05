import axios from 'axios';
import apiKey from '../../../gbapi';

export default {
    // retorna as informações do livros a partir da API do google books. Necessário ter uma apiKey
    async getInfo(req, res) {
      const { name } = req.query;
  
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=${apiKey}`);
  
      return res.json(response.data.items);
    }
}