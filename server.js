const express = require('express');
const app = express()
const port = 3000

const restaurants = require('./database');

app.use(express.static("assets"));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  console.log(restaurants)
  res.render('index', { restaurants })
})

app.get('/favorites', (req, res) => {
  res.render('favorites')
}
)
app.get('/detail-page', (req, res) => {
  res.render('detail-page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
