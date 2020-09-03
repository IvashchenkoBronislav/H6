// _________Задание 1.a______
let printNumbers = (from, to) => {
    let counter = from;

    setTimeout(function start() {
        console.log(counter);
        if (counter < to) {
            setTimeout(start, 1000);
        }
        counter++;
    }, 1000);
    }
    

// printNumbers(1, 20);


// _________Задание 1.b______

let printNumbers2 = () => {
    let i = 1;
    let timerId = setInterval(() => {
        console.log(i);
        if (i == 20) clearInterval(timerId);
        i++;
    }, 100);
}            

// printNumbers2();


// _________Задание 1.b______

let div = document.querySelector(".notify")
let message = "Привет";
let time = 3000;

let notify = (message, time)=>{
    let i = Math.floor(Math.random()*10); 

    div.innerHTML+=`<div class="notify__mass" id="${i}">${message}</div>`;
    console.log("1");
    console.log(message,time);
    console.log(i);

    setTimeout(function delite(){
        let box = document.getElementById(i);
        box.remove();
        },
    time)

    
    let box = document.querySelectorAll(".notify__mass");
    console.log(box);
    box.forEach((item)=>{
        item.addEventListener("click",()=>{ 
            item.remove();
        });
    });
};


//     
//     let box1 = document.querySelector("notify__mass")
    
//     box1.addEventListener("click", ()=>{
//         box1.remove();
//     })








//________Задача 2 _____________
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
// delay(3000).then(() => alert('Привет'));


