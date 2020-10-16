const modalLogIn = document.querySelector("#modail");
const userInputName = document.querySelector(".log_in__user_name");
const userInputPass = document.querySelector(".log_in__user_pass");

const textarea = document.querySelector("#textarea");

const buttonLogIn = document.querySelector(".log_in__button")

textarea.value = localStorage.getItem("textarea")


buttonLogIn.addEventListener("click", ()=>{
    if(userInputName.value !== localStorage.key)
    {localStorage.setItem("1",JSON.stringify({ueser:userInputName.value, pass:userInputPass.value}))}
})

textarea.addEventListener("keyup",()=>{
    localStorage.setItem("textarea", textarea.value)
})



document.querySelector(".modal__log_in").addEventListener("click", () => {
    modalLogIn.className = 'log_in__on';
})

modalLogIn.addEventListener("click", (event) => {
    if (event.target === modalLogIn) {
        modalLogIn.className = "log_in"
    }
},)   