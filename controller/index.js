const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {User, Product, Cart} = require('../model/index.js');
const user = new User();
const cart = new Cart();
const product = new Product();

route.get('^/&|/Capstone project', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});

route.post('/login', bodyParser.json(),(req, res)=>{
    user.login(req, res);
});

route.get('/USERS', (req, res)=>{
    user.fetchUsers(req, res);
});

route.get('/USER/:id',(req,res)=>{
    user.fetchUser(req, res);
});

route.put('/USER/:id', bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});

route.post('/register', bodyParser.json(),(req,res)=> {
    user.createUser(req, res);
})

route.delete('/USER/:id', (req, res)=>{
    user.deleteUser(req, res);
})

route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})

route.get('/product/:id',(req, res)=> {
    product.fetchProduct(req, res);
})

route.post('/product',bodyParser.json(),(req, res)=>{
    product.addProduct(req,res); 
})

route.put('/product/:id',bodyParser.json(),(req, res)=> {
    product.updateProduct(req, res);
})
route.delete('/product/:id',(req,res)=>{
    product.deleteProduct(req, res);
})
//cart
route.get('/user/:id/carts',(req, res)=>{
    cart.fetchItemCart(req,res);
})
route.post('/user/:id/cart',bodyParser.json(), (req, res)=>{
    cart.addItemCart(req,res);
})
route.put('/user/:id/cart/:id', bodyParser.json(),(req, res)=>{
    cart.updateItemCart(req,res);
})
route.delete('/user/:id/carts',(req, res)=>{
    cart.deleteItemCart(req,res);
})

module.exports =route;