const express = require('express');
const productListRouter = express.Router();

/* db */
const db = require('./db/firebase');
db.addProduct('asdsa');
/* routes */
productListRouter.get('/', (req, res) => {
    res.render('product-list', { title: 'Commerce' });
});

productListRouter.route('/')
    .get((req, res) => {
        res.render('product-list', { title: 'Commerce' });
    })
    .post((req, res) => {
        res.render('product-list', { title: 'Commerce' });
    });

module.exports = productListRouter;