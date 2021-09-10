let min = document.getElementById("min");
let sec = document.getElementById("sec");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let time = 180;
let timer ;


start.addEventListener('click', () => {
    toggle();
    timer = setInterval( count, 1000);
})

stop.addEventListener('click', () => {
    toggle();
    clearInterval(timer);
})

reset.addEventListener('click', () => {
    min.innerHTML = Math.floor(time/60);
    sec.innerHTML = time % 60;
    
}) 


const toggle = () => {
    if(start.disabled) {
        start.disabled = false;
        stop.disabled = true;
    }else if(stop.disabled) {
        start.disabled = true;
        stop.disabled = false;
    }else {
        console.log('toggleエラー');
    }
}

let count = () => {
    if(time === 0) {
        window.alert('時間です');
    }else {
        time -= 1;
        min.innerHTML = Math.floor(time/60);
        sec.innerHTML = time % 60;
    }
}


