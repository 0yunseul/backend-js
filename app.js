const express = require('express'); //express 모듈을 express 변수에 담고  (express객체를 사용한다)
const app = express(); //app이라는 express 객체의 인스턴스를 생성한다.

//정적인 파일 : img, css, js처리
app.use(express.static('public'));

//routing 처리
app.get('/', function (req, res) { //get 요청이 들어오면 응답
    /*
    res.send('Hello World'); 
    */
    res.sendFile(__dirname+"/public/main.html"); //HTML 파일로 응답
});
app.get('/reserve', function (req, res) { 
    res.sendFile(__dirname+"/public/reserve.html")
});


app.listen(3000,function(){
    console.log('서버가 3000번 포트에서 실행중입니다')
})