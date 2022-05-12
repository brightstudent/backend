const express = require('express');
const app = express()
const port = 3000

const restaurants = {
  name: "Poke magic",
  location: "2.5km"
}


app.use(express.static("assets"));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/favorites', (req, res) => {
  res.render('favorites')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



