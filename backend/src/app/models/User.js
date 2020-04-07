import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      bornDate: Sequelize.DATEONLY,
      passwordHash: Sequelize.STRING
    },
    {
      sequelize
    })

  }
}

export default User;