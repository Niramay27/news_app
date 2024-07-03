const { default: axios } = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('index.html',{root:__dirname})
})

app.get("/api",async(req,res)=>{
  console.log(req.__parsedUrl.query)
  let url = "https://newsapi.org/v2/everything?"+req.__parsedUrl.query
  let r = await axios(url)
  let a = r.data
  res.json(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})