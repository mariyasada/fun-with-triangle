 const quizform = document.querySelector(".quiz-form");
 const submitButton= document.querySelector("#submit-button");
 const outputEl = document.querySelector("#output");

 const correctAnswers = [
    "90°",
    "right angled",
    "100°",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];

 submitButton.addEventListener("click",() => {
    
      let score = 0;
      let index = 0;
    // console.log("button clicked")
    const formAnswers = new FormData(quizform);
    //  console.log(formAnswers);
    for(let value of formAnswers.values())
    {
        // console.log(value);
        if(value === correctAnswers[index])
        {
            score = score + 1;
            // console.log(score);
        }
        index =index + 1;
        // console.log(index);
    }
    outputEl.innerText = `your score is  ${score}`;

 });
