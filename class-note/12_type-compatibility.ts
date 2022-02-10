interface DeveloperState {
  name: string;
  skill: string;
}

// interface PersonState {
//   name: string;
// }

class PersonState {
  name: string;
  skill: string;
}

var developer: DeveloperState;
var person: PersonState;

// developer = person; // TypeError

// 타입 호환은 서로 호환시 오른쪽 변수가 왼쪽 변수보다 더 많은 속성을 가지거나 구조적으로 더 컸을때 서로 호환이 되는 것

// person = developer; // O

developer = new PersonState();

// 타입스크립트에서 구조적 타이핑은 interface, class 간의 비교가 아니라
// 타입 내부 속성들 객체간의 비교다.

// 함수
var add = function (a: number) {
  // ...
};

var sum = function (a: number, b: number) {
  // ...
};

// add 보다 sum 함수가 더 크다고 볼 수 있음.
sum = add; // 호환 가능
// add = sum; // Error

// 제네릭
interface Empty<T> {
  // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2; // Error
// notEmpty2 = notEmpty1; // Error
// 동일한 속성은 있지만 구조적인 차이점이 생긴다.
// 타입이 다르기 때문에 서로 호환이 되지 않는다.
