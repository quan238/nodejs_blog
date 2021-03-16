// express là thư viện express ở package-json -> vào node_modules
const express = require('express')

// gọi function express
// trả về đối tượng -> app 
const app = express()

// định nghĩa route 
const port = 3000

// khi đi vào trang chủ return trình duyệt 1 cái chuỗi 
app.get('/', (req, res) => {
 return res.send('Hello World!')
})


// 127.0.0.1 - localhost 
// node index.js : khoi chay application 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
