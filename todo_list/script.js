// HTML에서 id가 todoInput인 입력창 요소 가져오기
const todoInput = document.querySelector("#todoInput");

// HTML에서 id가 addTodoBtn인 추가 버튼 요소 가져오기
const addTodoBtn = document.querySelector("#addTodoBtn");

// TODO 목록을 표시할 영역(id가 todoList인 ul) 가져오기
const todoList = document.querySelector("#todoList");

// 투두 항목 전체를 저장할 배열, 빈 배열로 초기화
let todos = [];

// 각 투두 아이템에 붙일 고유 id 값 초기화, 1부터 시작
let nextTodoId = 1;

/* 새로운 투두 항목을 추가하는 함수 */
function addTodo() {
    // 입력창에 입력된 텍스트 가져오기, 앞뒤 공백은 제거(trim)
    const todoText = todoInput.value.trim();

    // 만약 빈 문자열이라면
    if (todoText === "") {
        alert("할 일을 입력해주세요!"); // 사용자에게 경고창 띄우기
        return; // 함수 중단, 항목을 추가하지 않음
    }

    // 새 투두 아이템 객체 생성
    const newTodo = {
        id: nextTodoId++, // 현재 id 값 대입 후 값 1 증가
        text: todoText,   // 입력된 텍스트 저장
        isEditing: false, // 수정 중인지 상태 표시용 (현재는 false로 초기화)
    };

    // todos 배열에 새 투두 아이템 추가
    todos.push(newTodo);

    // (개발용) 현재 전체 투두 목록을 콘솔에 출력해 확인
    console.log(todos);

    // 입력창 초기화 (입력값 지우기)
    todoInput.value = "";

    // 입력창에 다시 포커스 맞춰서 바로 새 입력 가능하도록
    todoInput.focus();
}

/* 버튼 클릭하면 addTodo 함수 실행 */
addTodoBtn.addEventListener("click", addTodo);

/* 입력창에서 키보드 눌렀을 때 이벤트 */
todoInput.addEventListener("keypress", (event) => {
    // 엔터(Enter) 키가 눌렸으면
    if (event.key === "Enter") {
        addTodoBtn.click(); // 추가 버튼 클릭 이벤트를 강제로 실행하여 투두 추가
    }
});
