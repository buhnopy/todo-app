const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const todoRouter = require('./routes/todo');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors()); // 모든 서버에서 보내는 요청 수락 (순서중요 라우터가 밑에있어야함)
app.use('/', todoRouter); //기본주소


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})