const questions=[
    {
        question:"Sky is blue",
        answers:[
        {text:"True",correct:true},
        {text:"False",correct:false}
        ]
    },
    {
        question:"5  +11  =18 ?",
        answers:[
        {text:"True",correct:false},
        {text:"False",correct:true}
        ]
    },
    {
        question:"Rainbow has 7 color ?",
        answers:[
        {text:"True",correct:true},
        {text:"False",correct:false}
        ]
    }];
    const questionElem=document.getElementById("question");
    const ansBtn=document.getElementById("buttons");
    const nextBtn=document.getElementById("next");
    let index=0;
    let score=0;
    function start(){
        index=0;
        score=0;
        nextBtn.innerHTML="Next";
        displayQue();
    }
    function displayQue(){
        resetState();
        let currentELem=questions[index];
        let queNo=index+1;
        questionElem.innerHTML=queNo +"."+currentELem.question;

        currentELem.answers.forEach(answer=>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            ansBtn.appendChild(button);

            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
         button.addEventListener("click",select);
        });
    }
    function resetState(){
        nextBtn.style.display="none";
        while(ansBtn.firstChild){
            ansBtn.removeChild(ansBtn.firstChild);
        }
       
    }
    function select(e){
        const selectBtn=e.target;
        const isCorrect=selectBtn.dataset.correct === "true";
        if(isCorrect){
            selectBtn.classList.add("correct");
            score++;
        }
        else{
            selectBtn.classList.add("incorrect");
        }
        Array.from(ansBtn.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
                
            }
            button.disabled=true;
        });
        nextBtn.style.display="block";
    }
    function showScore(){
        resetState();
        questionElem.innerHTML=`You scored ${score} out of ${questions.length}`;
        nextBtn.innerHTML="Play Again";
        nextBtn.style.display="block";

    }
    function nextButton(){
        index++;
        if(index < questions.length){
            displayQue();
        }
        else{
            showScore();
        }
    }
    nextBtn.addEventListener("click",()=>{
        if(index < questions.length){
            nextButton();
        }
        else{
            start();
        }
    })
    start();