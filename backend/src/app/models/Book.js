import Sequelize, { Model } from 'sequelize';

class Book extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      author: Sequelize.STRING,
      publishing: Sequelize.STRING,
      genre: Sequelize.STRING,
    },
    {
      sequelize,
    });
  }
}
export default Book;