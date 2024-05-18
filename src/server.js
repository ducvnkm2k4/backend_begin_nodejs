const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('sample.ejs');
});
app.get('/lol', (req, res) => {
    res.send('lollllll');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
