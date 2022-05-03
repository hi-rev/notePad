// todoList
const toDoForm = document.querySelector("#toDoForm");
const toDo = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDoList");
let toDos = []; // toDoList 내용이 담긴 object 배열

function toDoSubmitHandler(e) {
    e.preventDefault();
    const newToDo = toDo.value; // 새로 입력된 투두
    toDo.value = ""; // 제출하면 입력란 초기화

    // key, value 를 저장할 수 있는 object 생성
    const newToDoObj = {
        text: newToDo,
        id: Date.now() // 삭제를 위함
    };
    toDos.push(newToDoObj); // 리스트에 투두오브젝트 넣기

    // 투두 화면에 그리기 필요
    toDoPaint(newToDoObj);
    // 투두 localStorage 에 저장하기 필요
    toDoSave();

}

function toDoSave() {
    // localStorage 는 object 형태의 값을 저장할 수 없다.
    // 따라서 JSON.stringify 를 통해 object -> string 으로 변환하여 저장
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function toDoPaint(newToDo) {
    // createElement 는 지정한 tagName 의 HTML 요소를 만들어 반환함
    const li = document.createElement("li"); // li 요소 만들기
    li.classList.add("toDoLi");
    li.id = newToDo.id;
    const span = document.createElement("span"); // span 요소 만들기
    span.innerText = newToDo.text;
    const button = document.createElement("button"); // button 요소 만들기
    button.classList.add("toDoLiButton");
    button.innerText = "🌸" // 삭제 버튼
    button.addEventListener("click", toDoDel);
    li.appendChild(span); // span 을 li 안에 넣어줌
    li.appendChild(button); // button 을 li 안에 넣어줌
    toDoList.appendChild(li); // li 를 ul 안에 넣어줌
};

function toDoDel(e) { // toDoList 삭제하기
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    toDoSave();
}

const savedToDos = localStorage.getItem("toDos");

// localStorage 에 저장된 내용이 있으면 그려줌
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos); // 배열 형태로 변환한 것
    toDos = parsedToDos;
    parsedToDos.forEach(toDoPaint); // 각각의 배열에 대하여 인자의 함수를 실행시켜줌
    // => 기존 localStorage 에 저장되어 있던 것을 새로고침할 때 다시 그려준다.
}

// 해당 입력란과 폼이 담긴 곳에서 이벤트 리스너를 실행해야함(?)
// form 내에서 submit 이 발생하면 발동
// Form 은 제출을 위한 것이었군
toDoForm.addEventListener("submit", toDoSubmitHandler);

