require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT;

//config template engine
configViewEngine(app);

app.use(webRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

