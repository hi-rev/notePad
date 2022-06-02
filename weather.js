// API 사용: API 란, 다른 서버와 이야기 할 수 있는 방법
// key 는 노출되지 않도록 주의
const API_KEY = "xxxxxxxxxxxxxxxxxxxxx";

function onGeoOk(position) { // 위치를 정상적으로 받았을 때
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    // console.log(position); 하면 위도와 경도 정보가 어딨는지 확인 가능 => coords 안에 latitude 와 longitude 정보가 있다.
    // api 주소 끝에 &units=metric 을 추가하면 단위를 화씨 온도 => 섭씨 온도로 바꿔줌
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch()는 response 등의 요소를 JS 에서 접근하고 조작할 수 있게 해준다.
    // 이를 통해 해당 주소의 json 데이터를 가져올 수 있다.
    // response 객체는 직접적으로 JSON 응답 본문을 가져오지는 않는다. 따라서 json() 메서드를 호출해야한다.
    fetch(url).then(r => r.json()).then(data => {
       const weather = document.querySelector("#weather span:last-child");
       const city = document.querySelector("#city span:last-child");

       // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // 날씨, 온도
       city.innerText = data.name; // data.name 은 지역 정보
       weather.innerText = data.weather[0].main;
    });
}

function onGeoFail() { // 위치를 받지 못했을 때
    alert("Can't find you.");
}

// 브라우저에 현재 위치 좌표를 준다.
// 인자는 2개: 실행될 함수, 에러가 났을 때 실행될 함수
// 즉, 브라우저가 현재 위치를 얻었으면 onGeoOk()를 실행하고, 현재 위치를 얻지 못했으면 onGeoFail()을 실행한다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail);