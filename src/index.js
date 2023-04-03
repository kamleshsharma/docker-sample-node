import express from 'express'
const app = express()
const port = 3000
app.get('/hello', (req, res) => {
  res.status(200).send('hello world')
})
app.listen(port, () => {
  console.log(port, false)
})
