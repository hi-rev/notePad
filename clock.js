const clock = document.querySelector("#clock"); /* id=clock */

/* 년, 월, 일, 시, 분, 초 얻기 */
function clockHandler() {
    const date = new Date(); // 날짜와 시간을 제공하는 생성자 함수

    const year = String(date.getFullYear()); // 2022
    const month = String(date.getMonth() + 1); // getMonth()는 월을 index 로 표현(0~11)
    const today = String(date.getDate()).padStart(2, "0"); // 일
    const hours = String(date.getHours()).padStart(2, "0"); // 시
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 분
    const seconds = String(date.getSeconds()).padStart(2, "0"); // 초
    clock.innerText = `${year}년 ${month}월 ${today}일 ${hours}:${minutes}:${seconds}`;
}

clockHandler(); // setInterval 함수가 1초 뒤에 실행되기 때문에 맨 처음에 즉시실행
setInterval(clockHandler, 1000);