const inputs= document.querySelectorAll(".input-angles");
const triangleButton = document.querySelector("#Istriangle-check-btn");
const outputEl = document.querySelector("#output");


function calculatesumofangles(angle1,angle2,angle3){

    // console.log("sum of angle function");
    const sumofAngles = angle1 + angle2 + angle3;
    return sumofAngles;
    
}

triangleButton.addEventListener("click", ()=>{
 
    if((inputs[0].value && inputs[1].value && inputs[2].value)==="")
    {
        outputEl.innerText =" please fill all the fields";
    }
    
    const sumofAngles = calculatesumofangles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

        if(sumofAngles===180)
        {
        outputEl.innerText ="yeyy!! It is form a Triangle...";
        }
        else
        {
        outputEl.innerText="Oh! It is Not form a Triangle..."
        }
    

});
