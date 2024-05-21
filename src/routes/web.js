const express = require('express');
const router = express.Router();
const { getLol } = require('../controllers/homeController');
router.get('/', (req, res) => {
    res.render('sample.ejs');
});
router.get('/lol', getLol);


module.exports = router;