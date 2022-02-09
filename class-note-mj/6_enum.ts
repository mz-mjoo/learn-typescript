enum Shoes {
  Nike = "나이키",
  Adidas = "아디아스",
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 별도의 값을 지정하지 않으면 console.log()에 0을 출력, 숫자로 취급함

enum Answer {
  Yes = "Y",
  No = "N",
}

// 예제
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답");
  }

  if (answer === Answer.No) {
    console.log("오답");
  }
}

askQuestion(Answer.Yes);
askQuestion("Yes"); // X 이넘에서 제공하는 데이터만 적용되기 떄문에 타입 에러,,
