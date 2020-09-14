let packman = document.querySelector("#packman");
let packman1 = document.querySelector("#packman>img")

let packUp = parseFloat(packman.style.top);
const step = 100;
let on = true;


let stepUp = () => {

    let nowPosX = parseFloat(packman.style.top);

    if (nowPosX > 0) {
        packman.style.top = `${nowPosX - step}px`
    }
    on = false;




    setTimeout(() => {
        on = true
    }, 250)
}
let stepDown = () => {

    let nowPosX = parseFloat(packman.style.top);
    if (nowPosX < 600) {
        packman.style.top = `${nowPosX + step}px`
    }
    on = false;

    setTimeout(() => {
        on = true
    }, 250)
}

let stepLeft = () => {
    let nowPosY = parseFloat(packman.style.left);
    if (nowPosY > 0) {
        packman.style.left = `${nowPosY - step}px`
    }
    on = false;

    setTimeout(() => {
        on = true
    }, 250)
}

let stepRight = () => {
    let nowPosY = parseFloat(packman.style.left);
    if (nowPosY < 600) {
        packman.style.left = `${nowPosY + step}px`

    }
    on = false;

    setTimeout(() => {
        on = true
    }, 250)
}


window.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "ArrowUp":
            if (on === true) stepUp();
            food()
            direction("src/packman_1.png")
            break;
        case "ArrowDown":
            if (on === true) stepDown();
            food()
            direction("src/packman_0.png")
            break;
        case "ArrowLeft":
            if (on === true) stepLeft();
            food()
            direction("src/packman_2.png")
            break;
        case "ArrowRight":
            if (on === true) stepRight();
            food()
            direction("src/packman.png")
            break;
    }
})

let food = () => {
    let nowPosX = parseFloat(packman.style.top);
    let nowPosY = parseFloat(packman.style.left);

    console.log(nowPosX, nowPosY)

    if (nowPosX === 0 && nowPosY === 0) {
        document.getElementById("1").innerHTML = ``;
    }
    if (nowPosX === 0 && nowPosY === 200) {
        document.getElementById("2").innerHTML = ``;
    }
    if (nowPosX === 0 && nowPosY === 400) {
        document.getElementById("3").innerHTML = ``;
    }
    if (nowPosX === 0 && nowPosY === 600) {
        document.getElementById("4").innerHTML = ``;
    }
    if (nowPosX === 200 && nowPosY === 0) {
        document.getElementById("5").innerHTML = ``;
    }
    if (nowPosX === 200 && nowPosY === 200) {
        document.getElementById("6").innerHTML = ``;
    }
    if (nowPosX === 200 && nowPosY === 400) {
        document.getElementById("7").innerHTML = ``;
    }
    if (nowPosX === 200 && nowPosY === 600) {
        document.getElementById("8").innerHTML = ``;
    }
    if (nowPosX === 400 && nowPosY === 0) {
        document.getElementById("9").innerHTML = ``;
    }
    if (nowPosX === 400 && nowPosY === 200) {
        document.getElementById("10").innerHTML = ``;
    }
    if (nowPosX === 400 && nowPosY === 400) {
        document.getElementById("11").innerHTML = ``;
    }
    if (nowPosX === 400 && nowPosY === 600) {
        document.getElementById("12").innerHTML = ``;
    }
    if (nowPosX === 600 && nowPosY === 0) {
        document.getElementById("13").innerHTML = ``;
    }
    if (nowPosX === 600 && nowPosY === 200) {
        document.getElementById("14").innerHTML = ``;
    }
    if (nowPosX === 600 && nowPosY === 400) {
        document.getElementById("15").innerHTML = ``;
    }
    if (nowPosX === 600 && nowPosY === 600) {
        document.getElementById("16").innerHTML = ``;
    }
}

let direction = (src) => {
    packman1.src = src;
}