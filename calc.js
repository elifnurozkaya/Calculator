const buttons = document.querySelectorAll("button");
const operators= Array.from(document.querySelectorAll(".operator"));
const deleteButtons = Array.from(document.querySelectorAll(".delete"));

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
    





