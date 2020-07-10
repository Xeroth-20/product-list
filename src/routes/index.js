const express = require('express');
const indexRouter = express.Router();

/* routes */
indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Dev' });
});

module.exports = indexRouter;