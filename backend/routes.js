module.exports = function(app){

 var users = require('./controllers/users');
    app.get('/users',users.findAll);
    app.post('/users', users.add);
    app.delete('/users', users.delete);
    app.patch('/users/:id', users.update);
    app.put('/users/:id', users.findbyid);
    app.delete('/users/:id', users.delete);




};
