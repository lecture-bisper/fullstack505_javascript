// 화살표 함수 : ES6에서 추가된 함수 생성 방식
// => 기호를 사용하여 함수를 생성함

// 기존 함수 생성 방법 1
// function 키워드와 함수명을 사용하여 함수를 생성
function func01() {
  console.log("ES5의 함수 생성 방법 1");
}

func01();

// 기존 함수 생성 방법 2
// 변수에 익명함수를 대입하여 함수를 생성하는 방법
var func02 = function () {
  console.log("ES5의 함수 생성 방법 2");
}

func02();

console.log("\n ----- ES6 화살표 함수 ----- \n");

// ES6의 화살표 함수 사용
// () 와 =>, 코드블럭을 사용하여 함수를 생성하고 변수에 대입
var func03 = () => {
  console.log("ES6의 함수 생성 방법 1");
}

func03();

// 함수의 내용이 retrun만 존재할 경우 코드 블럭을 생략할 수 있음
var func04 = () => {
  return "ES6의 함수 생성 방법 2";
}

// 코드 블럭이 생략되고, return 키워드가 생략됨
var func05 = () => "ES6의 함수 생성 방법 2";

console.log(func04());
console.log(func05());

// 화살표 함수의 () 는 매개변수를 입력하는 부분
// 매개변수가 1개일 경우 ()를 생략할 수 있음
// 매개변수가 하나도 없거나, 혹은 2개 이상 있을 경우는 반드시 ()가 있어야 함
const func06 = (value) => {
  return "Hello " + value;
}
console.log(func06("World!!"));

const func07 = value => {
  return "Hello " + value;
}
console.log(func07("World!!"));

const func08 = value => "Hello " + value;
console.log(func08("World!!"));

const func09 = (num1, num2) => {
  return num1 + num2;
}

const func10 = (num1, num2) => num1 + num2;

const func11 = (num1, num2) => {
  const num3 = num1 + num2;
  return num3;
}

console.log(func09(10, 20));
console.log(func10(10, 20));
console.log(func11(10, 20));

