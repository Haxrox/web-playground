const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(`IP: ${req.ip}`);
  res.send(`Hello World!\n Req: ${req.ips}\nIP: ${req.ip}\n`);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})