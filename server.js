const express = require('express');
const proxy = require('./middleware/proxy');


const app = express();

app.use(express.static('public'));


/* Webpack middleware. Development only. */
if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');

    const compiler = webpack(require('./webpack.config'));

    app.use(require('webpack-dev-middleware')(compiler));
    app.use(require('webpack-hot-middleware')(compiler));
}

app.listen(3000, () => {
    console.log('Listening on port 3000.')
});