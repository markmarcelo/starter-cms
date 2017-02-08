const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // Get/post todos
  app.get('/api/todos', todosController.list);
  app.post('/api/todos', todosController.create);

  // Get/update/delete todos
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy);

  // Get/update/delete todo items
  app.post('/api/todos/item/:todoId', todoItemsController.create);
  app.put('/api/todos/items/:todoId/:todoItemId', todoItemsController.update);
  app.delete('/api/todos/items/:todoId/:todoItemId', todoItemsController.destroy);

  // For any other request method, return "Method Not Allowed"
  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));

};