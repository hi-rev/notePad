const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input"); // #login-form 내 첫번째 input
const loginH1 = document.querySelector("h1"); // h1
const loginH2 = document.querySelector("h2"); // h2

const SavedUserName = localStorage.getItem("username"); // localStorage 에 저장된 userName 가져오기

if (SavedUserName === null) { // 0. 저장된 이름이 없다면
    loginForm.classList.remove("hidden"); // 1. hidden class 삭제 => 이름 입력란 보임
    loginForm.addEventListener("submit", loginHandler); // 2. 이름 제출 하면 이벤트 리스너 실행
} else {
    showUserName(SavedUserName);
}

function loginHandler(e) {
    e.preventDefault(); // submit 할 때 자동 새로고침 막기
    const userName = loginInput.value; // 3. #login-form 내 첫번째 input 의 value 가져오기: 입력된 이름 저장

    loginForm.classList.add("hidden"); // 4. 이름 입력란 숨기기
    localStorage.setItem("username", userName); // 5. localStorage 에 입력 받은 userName 을 'username' 으로 저장

    showUserName(userName); // 6. showUserName 함수 실행하여 이름 적용된 내용 보이기
}

function showUserName(name) { // localStorage 에 저장된 이름 적용한 후 show!
    loginH1.innerText = `${name} Notebook`;
    loginH2.innerText = `Hello, ${name}!`;
}