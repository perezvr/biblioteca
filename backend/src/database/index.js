//mapeia meu model em relação ao banco de dados

import Sequelize from 'sequelize';
import Book from '../app/models/Book';
import dbConfig from '../config/database';

const models = [Book];

class Database {
  constructor(){
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();