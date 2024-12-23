/**
 * @license Apache-2.0
 * @copyright Aniket 2024
 */

'use strict';


/**
 * node modules
 */
const cors = require('cors');
const cookieParser = require('cookie-parser');


/**
 * custom modules
 */
const login = require('./src/routes/login.route');

// Initial express app
const express = require('express');
const app = express();


/**
 * EJS setting
 */
app.set('view engine', 'ejs');


/**
 * setting static directory
 */
app.use(express.static('${__dirname}/public'));


/**
 * Enable cors & cookie parser
 */
app.use(cors()).use(cookieParser());


/**
 * Login page
 */
app.use('/login', login);



app.listen(4000, () => {
    console.log('server listening at http://localhost:4000')
})