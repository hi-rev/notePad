/* 캔버스(canvas) 구현하기 */
const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
let painting = false;
let filling = false;

/* 있으나 없으나 실행결과는 같은데 꼭 있어야 하는 코드인가...? */
ctx.strokeStyle = "black";  // 윤곽선 색 지정
ctx.lineWidth = 2.5;  // 선 너비 지정

/* css 에서 캔버스 사이즈를 지정해줬더라도 자바스크립트에서 다시 지정해줘야함 */
canvas.width = 400;
canvas.height = 400;

/* canvas 가 존재한다면 실행
   canvas 지원 여부를 고려한 if문 */
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleColorClick);
}

/* 마우스가 지나갈 때 */
function onMouseMove(e) {
    // 마우스가 캔버스 위를 지나갈 때 좌표를 얻음
    const x = e.offsetX;
    const y = e.offsetY;

    if (painting) {  // 마우스를 클릭하면 선을 그린다.
        ctx.lineTo(x, y); // 끝 좌표
        ctx.stroke(); // 그리기
    } else {  // 마우스를 놓으면 선을 초기화 하고, 시작 좌표를 움직임
        ctx.beginPath(); // 초기화
        ctx.moveTo(x, y); // 시작 좌표
    }
}

/* 마우스를 클릭할 때 */
function startPainting() {
    painting = true;
}

/* 마우스를 클릭을 놓을 때 */
function stopPainting() {
    painting = false;
}

function handleColorClick(e) {
    const color = e.target.style.backgroundColor;
}