//사용할 모듈(=자바스크립트 파일)을 기록하는 곳
const express = require('express'); //express 모듈을 express 변수에 담고  (express객체를 사용한다)
const morgan = require('morgan') //HTTP request logger를 사용할 수 있도록 준비

const app = express(); //app이라는 express 객체의 인스턴스를 생성한다.
app.set('view engine', 'pug'); //view 템플릿 엔진으로 pug 사용한다고 설정함
app.set('port',3000); //서버포트를 3000으로 사용한다고 설정

const bodyParser = require('body-parser') //bodayParser를 사용할 수 있도록 준비

//사용할 미들웨어모듈 (app.use)  : 미들웨어는 순서대로 호출됨(=순서가 중요함)
app.use(express.static('public'));// 정적인 파일 : img, css, js처리
app.use(bodyParser.json()); //json데이터를 처리할때 
app.use(bodyParser.urlencoded({extended : true})); //인코딩된 문자열 처리
app.use(morgan("dev")); //배포할때는 "combined"

//routing 처리 : 요청에 따른 응답 방법을 결정하는것
app.get('/', function (req, res) { //get 요청이 들어오면 응답
    // res.send('Hello World'); 
   // res.sendFile(__dirname+"/public/main.html"); //HTML 파일로 응답   
    res.render('index', { title: 'hanul tour!', message: '지금 예약하세요!' }); //pug로 응답
});
app.get('/tour', function (req, res) { 
   //res.sendFile(__dirname+"/public/reserve.html")
   res.render('tour');   
});

app.get('/reserve', function (req, res) { 
    //res.sendFile(__dirname+"/public/reserve.html")
    res.render('reserve');   
 });
 app.get('/customer', function (req, res) { 
    //res.sendFile(__dirname+"/public/reserve.html")
    res.render('cs');   
 });
app.post('/send_reserve', function (req, res) { 
   // res.send(req.body.guest_name+"님, 환영합니다."); //bodyParser가 이해하고 출력
   if(req.body.guest_name==="홍길동"){
    res.send(req.body.guest_name+"님, 환영합니다.");
   }else{
    res.send("회원가입페이지로 이동합니다")
   }
    console.log(req.body);
});

const CURRENT_PORT = app.get('port'); //app.set() 으로 지정한 포트번호 
app.listen(CURRENT_PORT ,function(){
    console.log('서버가 ${CURRENT_PORT}번 포트에서 실행중입니다')
}) 