const express = require('express')
const app = express()
const app2 = express()
const port = 3000
const port2 = 3001

app.get('/', (req, res) => {
  console.log(`Port: ${port} | IP: ${req.ip}`);
  res.send(`Hello World: ${port}!\n Req: ${req.ips}\nIP: ${req.ip}\n`);
});

app.get('/ip', (req, res) => {
  console.log(`Port: ${port} | IP: ${req.ip}`);
  res.send(`Port: ${port2} | IP: ${req.ip}\n`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app2.get('/', (req, res) => {
  console.log(`Port: ${port2} | IP: ${req.ip}`);
  res.send(`Hello World: ${port2}!\n Req: ${req.ips}\nIP: ${req.ip}\n`);
})

app2.listen(port2, () => {
  console.log(`Example app listening on port ${port2}`)
})

app2.get('/ip', (req, res) => {
  console.log(`Port: ${port2} | IP: ${req.ip}`);
  res.send(`Port: ${port2} | IP: ${req.ip}\n`);
})