let min = document.getElementById('min');
let sec = document.getElementById('sec');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let timer ;
let time = 180;
function realTime () {
    min.innerHTML = Math.floor(time/60);
    sec.innerHTML = time%60
}

let count = () => {
    if(time == 0) {
        window.alert('時間です');
    }else {
        time --;
        realTime();
    }

}

function toggle () {
    if(start.disabled) {
        start.disabled = false;
        stop.disabled = true;
    }else if (stop.disabled) {
        start.disabled = true
        stop.disabled = false;
    }
}



start.addEventListener('click' ,() => {
    timer = setInterval(count, 1000);
    toggle();

}) 

stop.addEventListener('click', () => {
    clearInterval(timer);
    toggle();
})

reset.addEventListener('click', () => {
    time = 180;
    realTime();
})


