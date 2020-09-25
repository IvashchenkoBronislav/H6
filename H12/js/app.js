//_______________1____________

let isEmpty = (obj) => {
    for (let key in obj){
        return false;
    }
    return true;
}

//____________2__________


let salaries = {
    John:100,
    Ann:160,
    Pete:130
}

let summ = null;
let calc = (obj) => {
    for (let key in obj){
        summ += obj[key]
    }
}
// calc(salaries)
// console.log(summ)

//__________3____________

let calculator = {

    read() {
      this.a = +prompt('a?');
      this.b = +prompt('b?');
    },

    sum() {
        
      return this.a + this.b;
    },
  
    mul() {
        
      return this.a * this.b;
    },
  
    
};

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

//______________4___________

let obj = {a:1, b:2};

function A() { return obj; }
function B() { return obj; }


let a = new A;
let b = new B;

console.log( a == b );

//_____________5____________

function askPassword(ok, fail) {
    let password = prompt("Password?", '');

    if (password == "rockstar")
        ok();
    else
         fail();    
}

let user = {
    name: 'Вася',

    loginOk() {
        console.log("test" , this.name)
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log("test", this.name)
        console.log(`${this.name} failed to log in`);
    },
};



askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
