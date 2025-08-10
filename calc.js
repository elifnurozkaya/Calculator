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
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiplt(a,b){
    return a*b;
}
function divide(a,b){
    if(b == 0)
        return("Yk you can't do that!")
    return a/b;
}




