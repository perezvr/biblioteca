
exports.up = function(knex) {
  return knex.schema.createTable('books', function(table) {
    table.string('id').primary(),
    table.string('name').notNullable();
    table.string('author').notNullable();
    table.string('publishing').notNullable();
    table.string('genre').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
