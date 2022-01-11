const sides = document.querySelectorAll(".sides");
const calculateArea = document.querySelector("#Area-button");
const outputEl= document.querySelector("#output");

// function calculateproductOfBaseHeight(a,b){
//     const productofBaseandHeight = a * b;
//     return productofBaseandHeight;
// }


// calculateArea.addEventListener("click",()=>{
//     // console.log("clicked");
//     const productofBaseandHeight = calculateproductOfBaseHeight (Number(sides[0].value),Number(sides[1].value));
//     const area = (0.5 *(productofBaseandHeight));
//     outputEl.innerText = "The Area of Triangle is   "  + area + " cm²";
// });


calculateArea.addEventListener("click",()=>{
    // console.log("clicked");
    const area = 0.5 * (Number(sides[0].value) * Number(sides[1].value));
    // const area = (0.5 *(productofBaseandHeight));
    outputEl.innerText = `The Area of Triangle is  ${area}  cm²`;
});
