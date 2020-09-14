let modalLogIn = document.querySelector("#modail");

document.querySelector(".modal__log_in").addEventListener("click", () =>{
    modalLogIn.className='log_in__on';
})

modalLogIn.addEventListener("click",(event)=>{
    modalLogIn.className="log_in"
    console.log(event)
},true)