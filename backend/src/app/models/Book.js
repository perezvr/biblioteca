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

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'user_id', as: 'owner' });
  }
}
export default Book;