import axios from 'axios';

const bookApi = axios.create({
  baseURL: 'http://localhost:3333'
})

export default bookApi;