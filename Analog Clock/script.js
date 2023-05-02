const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30 + min / 2;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    

    hour.style.transform = `rotateZ(${hh}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
};

setClock();
setInterval(setClock(),1000);
