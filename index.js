require('dotenv').config();
const express = require('express');

// Controllers
const indexController = require('./controllers/indexController');
const customerController = require('./controllers/customerController');
const orderController = require('./controllers/orderController');
const userController = require('./controllers/userController');

// Initialization
const app = express();
const port = 8080;

// Routing
app.get('/', indexController.index);
app.get('/api/up', indexController.up);

app.get('/api/users', userController.allUsers);

app.get('/api/customers/search', customerController.customerSearch);
app.get('/api/customers/:id', customerController.customerById);

app.get('/api/orders/:customerId', orderController.orderByCustomerId);

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}!`));
