const express = require('express') // nạp express từ trong folder ra
const app = express() // trả vê 1 đối tựng đại diện cho ứng dụng của b
const port = 3000 //bạn muốn run ở cổng nào thì khai báo ở đây

app.get('/tin-tuc', (req, res) => { //định nghĩa tuyến đường mặc định / là k phải nhập gì nữa
    var c = 1
    c++
    ++c
    c+=4
    res.send('Hello World!')    //trả về content cho trình duyệt sử dụng giao thức http để response lại HelloWorld
})

app.listen(port, () => { //app được khởi tạo từ express và lắng nghe cổng 3000
    console.log(`Example app listening at http://localhost:${port}`)
})