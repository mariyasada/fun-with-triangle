const sides = document.querySelectorAll(".sides");
const calculateHypo = document.querySelector("#Hypotenuse-button");
const outputEl= document.querySelector("#output");

const calculateSquare = ( a, b) => {
  const sumOfSquare = (a * a )  +  ( b * b);
  return sumOfSquare;
}


calculateHypo.addEventListener("click",() => {

// console.log("clicked");

  if((sides[0].value && sides[1].value) ===""){
    outputEl.innerText = "Please Enter the value in both fields";

  }
    const sumOfSquare = calculateSquare(Number(sides[0].value),Number(sides[1].value));
    // console.log(sumOfSquare);
    const Hypotenuse = Math.sqrt(sumOfSquare);

    outputEl.innerText = `The length of hypotenuse is ${Hypotenuse} cm`;

});