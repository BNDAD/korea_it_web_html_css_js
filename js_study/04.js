//배열
const arr1 = []; //빈 배열
const arr2 = new Array(); //빈 배열

//새로운 요소 추가
//push => 배열의 끝에 요소를 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);
console.log(arr2);

//배열과 객체의 참조 비교 => 자바스크립트에서 객체(배열 포함)는 참조타입
// === (일치연산자)는 객체의 경우 메모리 주소(참조)가 같은지 비교
console.log(arr1 === arr2);
//arr1과 arr2는 내용이 같더라도 서로 다른 메모리 공간에 있는 별개의 객체이므로
//false가 출력된다.

const obj1 = { key1: "value1", key2: "value2" };
const obj2 = { key1: "value1", key2: "value2" };
console.log(obj1 === obj2); //obj1과 obj2도 내용이 같더라도 별개의 객체

//JSON (Javascript Object Notation)
//자바스크립트 객체/배열과 JSON 문자열 간의 변환
//JSON.stringify() => 자바스크립트 객체 또는 배열을 JSON형식의 문자열로 변환
//JSON.parse() => JSON문자열을 자바스크립트 객체 또는 배열로 변환

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(typeof json2);
console.log(json1 === json2); // JSON문자열은 값이 같으면 동일하다고 판단

//배열의 다양한 기본 내장 함수
const names = ["이동윤", "삼동윤", "사동윤"];
names.push("오동윤");
console.log(names);

//const가 재할당을 금지하는 것이지,
//참조하는 객체(배열)의 내용 변경까지 막는 것은 아니다.

//요소 제거: pop() => 배열의 마지막 요소를 제거하고 그 요소를 반환
console.log(names.pop());

//요소 수정/삽입/제거: splice(삽입될 인덱스, 제거할 개수, 추가할 요소...)
names.splice(1, 0, "육동윤");
console.log(names);

//요소 찾기: find() => 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소를 반환
const findFx = (n) => n === "육동윤";
const foundName = names.find(findFx);
console.log(foundName);

const students = [
  { name: "김성엽", age: 30 },
  { name: "이성엽", age: 31 },
  { name: "박성엽", age: 30 },
  { name: "최성엽", age: 33 },
  { name: "최성엽", age: 34 },
];

console.log(students.find((s) => s.name === "이성엽"));

//값 존재 여부: includes() - 배열에 특정 값이 포함되어 있는지 boolean으로 반환
console.log(names.includes("육동윤"));
//naems에 해당 값이 포함되어 있으면 true

//필터링: filter() - 주어진 조건 함수를 통과하는 모든 요소로 새로운 배열을 만듭니다.
//원본 배열은 영향을 주지 않음ㄴ
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((n) => n % 2 === 0));
const even = numbers.filter((n) => n % 2 === 0);
console.log(students.filter((student) => student.age === 30));

//map() - 배열의 모든 요소에 대해 주어진 함수를 호출(적용)한 결과를 모아 새로운 배열을 반환
console.log(numbers.map((n) => n * 10));
console.log(
  students.map((student) => {
    if (student.age === 30) {
      //나이가 27인 학생은 이름만 있는 새로운 객체를 반환
      return {
        name: student.name,
      };
    }
    return student;
  })
);
