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
            input.value = resultNum;
          break;
    
        case "-":
            resultNum = num1 - num2;
            num1 = null;
            num2 = null;
            input.value = resultNum; 
            break;    
        case "*":
            resultNum = num1 * num2;
            num1 = null;
            num2 = null;
            input.value = resultNum;    
            break;
    
        case "/":
            resultNum = num1 / num2;
            num1 = null;
            num2 = null;
            input.value = resultNum;
            break;     

        default:
            num1 = null;
            num2 = null;
            input.value = resultNum;
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
            
        }else if(button.value==="="||button.value==="-"||button.value==="+"||button.value==="/"||button.value==="*"||button.value==="%"){
                if(num1 === null){
                num1=parseFloat(input.value);
                operator = button.value;
                input.value="";
            }else{
                num2=parseFloat(input.value);
                input.value=""
                oper();
            }
                    
            
        }else{            
            input.value += button.value;
            console.log("N");  
        }

        console.log(num1)
        console.log(num2)
        console.log(operator)
        console.log(resultNum)
            
        
        
    })    
})