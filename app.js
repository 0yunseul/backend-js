//사용할 모듈(=자바스크립트 파일)을 기록하는 곳
const express = require('express'); //express 모듈을 express 변수에 담고  (express객체를 사용한다)
const morgan = require('morgan') //HTTP request logger를 사용할 수 있도록 준비
const app = express(); //app이라는 express 객체의 인스턴스를 생성한다.
const bodyParser = require('body-parser') //bodayParser를 사용할 수 있도록 준비

//사용할 미들웨어 모듈 : 미들웨어는 순서대로 호출됨(=순서가 중요함)
app.use(express.static('public'));// 정적인 파일 : img, css, js처리
app.use(bodyParser.json()); //json데이터를 처리할때 
app.use(bodyParser.urlencoded({extended : true})); //인코딩된 문자열
app.use(morgan("dev")); //배포할때는 "combined"

//routing 처리 : 요청에 따른 응답 방법을 결정하는것
app.get('/', function (req, res) { //get 요청이 들어오면 응답
    //   res.send('Hello World'); 
    
    res.sendFile(__dirname+"/public/main.html"); //HTML 파일로 응답
});
app.get('/reserve', function (req, res) { 
    res.sendFile(__dirname+"/public/reserve.html")
});
app.post('/send_reserve', function (req, res) { 
    res.send(req.body.guest_name+"님, 환영합니다."); //bodyParser가 이해하고 출력
});


app.listen(3000,function(){
    console.log('서버가 3000번 포트에서 실행중입니다')
}) 