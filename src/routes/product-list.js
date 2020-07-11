const express = require('express');
const productListRouter = express.Router();

/* db */
const db = require('./database/firebase');
db.getProductList({
    data: (data) => console.log(data),
    error: (err) => console.log(err)
});

/* routes */
productListRouter.route('/')
    .get((req, res) => {
        db.getProductList({
            data: (data) => {
                res.render('product-list', {
                    title: 'Commerce',
                    productList: data
                });
            },
            error: (err) => {
                res.send(err);
            }
        });
    })
    .post((req, res) => {
        db.addProduct({
            data: (data) => res.redirect('/product-list'),
            error: (err) => res.send(err)
        }, req.body);
    });

module.exports = productListRouter;