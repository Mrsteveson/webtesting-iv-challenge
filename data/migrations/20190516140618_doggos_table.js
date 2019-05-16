exports.up = function(knex, Promise) {
  return knex.schema.createTable('doggos', tbl => {
      tbl.increments();

      tbl
      .string('name', 128)
      .notNullable();

      tbl
      .string('status', 128)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('doggos')
};
