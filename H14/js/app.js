//_________1__________

let ask = (question, yas, no) => {
    if (confirm(question)) yas()
    else no();
}

// ask(
//     "Вы согласны?",
//     () => {alert("Вы согласились.")},
//     () => {alert("Вы отменили выполнение.")}
// )

//_________2___________
const next = document.querySelector(".next");
const priv = document.querySelector(".priv");
const boxStyle = getComputedStyle(document.querySelector(".box"));
const scrol = document.querySelector(".scrol");
const stepTime = parseFloat(getComputedStyle(scrol).transitionDuration) * 1000 + 250;
const step = 350;


let on = true;


let nextDiv = () => {
    let nowPos = parseFloat(getComputedStyle(scrol).right)
    let nextPos = nowPos + step;

    if (nextPos >= 1051) {
        scrol.style.right = `0px`
    } else {
        scrol.style.right = `${nextPos}px`
    }
    on = false;

    setTimeout(() => {
        on = true;
    }, stepTime);
};

let privDiv = () => {
    let nowPos = parseFloat(getComputedStyle(scrol).right)
    let nextPos = nowPos - step;

    if (nextPos < 0) {
        scrol.style.right = `1050px`
    } else {
        scrol.style.right = `${nextPos}px`
    }
    on = false;

    setTimeout(() => {
        on = true;
    }, stepTime);
};

let nowPos = parseFloat(getComputedStyle(scrol).right)
console.log(nowPos)

next.addEventListener("click", () => {
    if (on == true) nextDiv();
})


priv.addEventListener("click", () => {
    if (on == true) privDiv();
})
