const express = require('express');
const app = express();
const path = require('path');

/* settings */
app.set('port', process.env.PORT || 4200);

/* public resources */
app.use(express.static(path.join(__dirname, 'public')));

/* views */
app.set('views', path.join(__dirname, 'views'));

/* view engine */
app.set('view engine', 'ejs');

/* middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const logger = require('morgan');
app.use(logger('dev'));

/* setting routes */
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const productListRouter = require('./routes/product-list');
app.use('/product-list', productListRouter);

/* listen */
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});