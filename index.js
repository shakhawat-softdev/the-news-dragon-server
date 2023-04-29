const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
app.use(cors());
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Dragon is running')
})

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id);
    res.send(selectedNews);
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    } else {
        const categoryNews = news.filter(news => news.category_id === id)
        res.send(categoryNews)

    }

})

app.listen(port, () => {
    console.log(`dragon API is Runnging on port ${port}`);
})