const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    //config express
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    //config view engine
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;