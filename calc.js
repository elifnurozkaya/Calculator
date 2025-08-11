const buttons = document.querySelectorAll("button");
const operators= Array.from(document.querySelectorAll(".operator"));
const deleteButtons = Array.from(document.querySelectorAll(".delete"));

const topScreen = document.querySelector(".typeScreen");
const bottomScreen = document.querySelector(".resultScreen");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multi = document.querySelector("#mult");
const divi = document.querySelector("#div");

const equal = document.querySelector("#equalTo");
const CE = document.querySelector("#clearEntry");
const AC = document.querySelector("#allClear");
const bs = document.querySelector("#backspace");
const dot = document.querySelector("#dot");

let number = "";
let operator = "";
let first = "";
let second= "";
let op;
let result = "";




buttons.forEach(button => {
button.addEventListener("mousedown",(e)=> {
    button.style.boxShadow = "inset 0rem 0rem 0.4rem black";
    button.style.padding="0.25rem";
    if(operators.includes(button))
        button.style.backgroundColor= "rgb(193, 157, 57)";
    else if(deleteButtons.includes(button))
        button.style.backgroundColor="rgba(154, 144, 100, 1)";
    else
        button.style.backgroundColor= "rgb(219, 211, 175)";
});});
buttons.forEach(button => {
    button.addEventListener("mouseup",releaseButton);
    button.addEventListener("mouseout",releaseButton);    
})


zero.addEventListener("click",(e)=>{if(number!=""){number=0;numberChange(e);}});
one.addEventListener("click",(e)=>{number=1;numberChange(e);});
two.addEventListener("click",(e)=>{number=2;numberChange(e);});
three.addEventListener("click",(e)=>{number=3;numberChange(e);});
four.addEventListener("click",(e)=>{number=4;numberChange(e);});
five.addEventListener("click",(e)=>{number=5;numberChange(e);});
six.addEventListener("click",(e)=>{number=6;numberChange(e);});
seven.addEventListener("click",(e)=>{number=7;numberChange(e);});
eight.addEventListener("click",(e)=>{number=8;numberChange(e);});
nine.addEventListener("click",(e)=>{number=9;numberChange(e);});



plus.addEventListener("click",(e)=>{operator= "+";addOperator();});
minus.addEventListener("click",(e)=>{operator="-";addOperator();});
multi.addEventListener("click",(e)=>{operator="×";addOperator();});
divi.addEventListener("click",(e)=>{operator="÷";addOperator();});


equal.addEventListener("click",()=>{
    topScreen.textContent = result;
    bottomScreen.textContent = "";
    second = "";
    op = "";
    operator = "";
    
})

AC.addEventListener("click",()=>{
    topScreen.textContent = "";
    bottomScreen.textContent = "";
    first = "";
    second = "";
    op = "";
    operator = "";
    number = "";
    result= "";
});
CE.addEventListener("click",()=>{
    topScreen.textContent = "";
    bottomScreen.textContent = "";
    first = "";
    second = "";
    op = "";
    operator = "";
    number = "";
    result= "";
});


function numberChange(e){
    if(operator==""){
        topScreen.textContent += number;
        first += number;
    }
    else{
        topScreen.textContent += number;
        second +=number;
        if(op == "+")
            result = add(first,second);
        else if(op == "-")
            result = substract(first,second);
        else if(op == "×")
            result = multiply(first,second);
        else if(op =="÷")
            result = divide(first,second);

        bottomScreen.textContent = result;

    }
    
}

function addOperator(){
    if(number != "" && result=="")
        topScreen.textContent += operator;
    else if(number !="" && result != ""){
        first = result;
        result = "";
        second = "";
        topScreen.textContent = first + operator;
        bottomScreen.textContent = "";
    }
    number = "";
    op = operator;
    
}




function releaseButton(e){
    const button = e.currentTarget;
        button.style.boxShadow = "inset 0rem -0.3rem 0.2rem black";
        button.style.paddingBottom= "0.5rem";
    if(operators.includes(button))
        button.style.backgroundColor= "rgb(238, 199, 89)";
    else if(deleteButtons.includes(button))
        button.style.backgroundColor="rgb(193, 183, 138)";
    else
        button.style.backgroundColor= "rgb(255, 247, 212)";
}
    
function add(a,b){

    return (+a)+(+b);
}
function substract(a,b){
    return (+a)-(+b);
}
function multiply(a,b){
    return (+a)*(+b);
}
function divide(a,b){
    if(b == 0)
        alert("Yk you can't do that!");
    return (+a)/(+b);
}



























