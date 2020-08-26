const input = document.querySelector('input');
// let arrNum = null;

let num1 = null;
let num2 = null;
let operator =null;
let resultNum = null;



document.querySelectorAll("button").forEach((button)=>{
    
    const oper = () => {switch (operator) {
        case "+":
            resultNum = num1 + num2;
            num1 = null;
            num2 = null;
            input.placeholder = resultNum;
          break;
    
        case "-":
            resultNum = num1 - num2;
            num1 = null;
            num2 = null;
            input.placeholder=resultNum; 
            break;    
        case "*":
            resultNum = num1 * num2;
            num1 = null;
            num2 = null;
            input.placeholder= resultNum;    
            break;
    
        case "/":
            resultNum = num1 / num2;
            num1 = null;
            num2 = null;
            input.placeholder=resultNum;
            break;     

        default:
            num1 = null;
            num2 = null;
            input.placeholder=resultNum;
            break
      }
    }
    
    
    button.addEventListener("click",()=> {
        if(button.value=="clin"){
            input.value="";
            num1 = null;
            num2 = null;
            operator =null;
            resultNum=null;
            console.log("clin");
            input.placeholder="0";
            
        }else if(button.value==="="||button.value==="-"||button.value==="+"||button.value==="/"||button.value==="*"||button.value==="%"){
                if(num1 === null){
                num1=input.value;
                operator = button.value;
                input.value="";
                input.placeholder= num1 + operator;
                    
            }else{
                num2=input.value;
                input.value=""
                oper();
            }
                    
            
        }else{            
            input.value +=button.value;
            console.log("N");  
        }

        console.log(num1)
        console.log(num2)
        console.log(operator)
        console.log(resultNum)
            
        
        
    })    
})

let slid = document.querySelector(".calculator__button__dop__slid");
let toggle = false;

let buttonDop = document.querySelector(".calculator__button__dop");

slid.addEventListener(("click"), ()=>{
    buttonDop.classList.toggle('calculator__button__dop_vis');
    if(toggle == false){
        toggle=true;
        slid.value = ">";
    }else{
        toggle=false;
        slid.value ="<";
    }
})