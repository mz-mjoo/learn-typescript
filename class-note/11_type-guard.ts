interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {
    name: "Tony",
    age: 33,
    skill: "Iron Making",
  };
}

var tony = introduce();
// console.log(tony.skill);

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}

// 위에는 Developer 타입의 토니, 아래는 Person 타입의 토니
// 각각의 필요한 속성에 접근할 수 있다.
