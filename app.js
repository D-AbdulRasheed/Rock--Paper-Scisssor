let userScore = 0;
let compScore = 0;

const userScorepara=document.querySelector("#user_score");
const compScorepara=document.querySelector("#comp_score");


const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const genCompChoice = () => {
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random() * 3); 
    return options[randomIdx];
}


const showWinner = (userWin, userChoice, compchoice) =>{
    if (userWin === true){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText=`you win :) ...your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText=`you lose :( ... comp ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }

}

const drawGame = () =>{
    msg.style.backgroundColor = "#081b31";
    msg.innerText="Game was draw"

}

const playgame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compchoice = genCompChoice()
    console.log("comp choice =", compchoice);

    if(userChoice === compchoice){
        drawGame();
    }
    else{
        let userWin =  true;
        if(userChoice ==="rock" ){
            userWin = compchoice === "paper" ? false : true;
        }
        else if(userChoice === "paper" ){
            userWin = compchoice === "scissor"? false : true;
        }
        else {
            userWin = compchoice === "rock"? false : true;
        }

    showWinner(userWin,userChoice,compchoice)
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
  
    });
});