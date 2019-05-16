
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doggos').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('doggos').insert([
        { name: 'Ace', Status: 'Good Boi'},
        { name: 'Mike', Status: 'Good Boi'},
        { name: 'Kirby', Status: 'Good Boi'},
        { name: 'Chip', Status: 'Good Boi'},
        { name: 'Daisy', Status: 'Good Gurl'},
        { name: 'Helen', Status: 'Good Gurl'},
        { name: 'Nikki', Status: 'Good Gurl'},
      ]);
    });
};
