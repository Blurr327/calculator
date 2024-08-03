const display = document.querySelector(".display");
const operation = "+-/*";

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return add(a,-b);
}

function divide(a, b) {
    if(!b) {
        alert("No division by zero pls.");
        return 0;
    }
    return a/b;
}

let a = b = o = "";

function operate(a, b, o) {
    console.log(a);
    console.log(b);
    console.log(o);
    switch(o){
        case '+': return add(a, b);
        case '*': return multiply(a,b);
        case '-': return subtract(a,b);
        case'/': return divide(a,b);
    }
}

function clear() {
    display.textContent = "", a = b = o = "";
}


document.addEventListener('click', (e) => {
    const classes = e.target.classList;
    const text = e.target.textContent;
    let res = "";
    if(classes.contains("delete")) clear();
    if(/^\d+$/.test(text)){
        if(typeof a === "string") a+=text;
        else b+=text;
        res=text;
    }
    if(operation.includes(text) && !o) a = parseFloat(a), o = res = text;
    if( text === '=' && b!=="") b = parseFloat(b), res = operate(a, b ,o), clear(), a="" +res;
    display.textContent+=res;
})