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
const logger = require('morgan');
app.use(logger('dev'));

/* setting routes */
const routerIndex = require('./routes/index');
app.use('/', routerIndex);

/* listen */
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});