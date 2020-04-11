// arquivo de integração do sequelize com o banco de dados
module.exports = {
  dialect: 'sqlite',
  storage: './src/database/db.sqlite',
  define: {
    timestamps: true, // armazena a data da criação e edição de cada registro
    underscored: true, // transforma os camelCase em snake_case
    underscoredAll: true,
  },
};
