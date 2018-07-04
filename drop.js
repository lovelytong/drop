
function drop(v, d, a) {
    let button = document.getElementById("button")
    button.disabled = 'disabled'

    let ball = document.getElementById("ball")

    v = v * a;
    let top = ball.offsetTop;

    if (top > 600) {
        d = -1;
        a = 0.8;
    }
    if (v < 2 ) {
        d = 1;
        a = 1.1;
    }
    top += v * d;
    ball.style.top = top + "px";
    setTimeout(() => {
        drop(v, d, a)
    }, 50)
}
