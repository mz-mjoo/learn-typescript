// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("hi");

// 유니온 타입
// function logText(text: string | number) {
//     console.log(text);
//     text.
//     return text
// }

// const a = logText('10');

// 1. string 과 number 타입의 교집합 api만 자동완성 제공해주는 문제점이 있음
// 2. 타입을 정확하게 알 수 있어야만 타입에 맞는 api를 사용할 수 있음. 아니면 타입 에러 발생

// 제네릭을 이용한 타입선언
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("abc"); // 호출시 타입 정의, 타입 string
// 제네릭을 이용해서 타입 추론해줌
str.split("");
logText(10);

const login = logText<boolean>(true);

// 인터페이스에 제네릭 선언
// interface Dropdown {
//     value : string;
//     selected : boolean;
// }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = { value: "abc", selected: false };
