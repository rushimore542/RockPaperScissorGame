const choices=["rock","paper","scissor"];
const playerdisplay=document.getElementById("Playerdisplay");
const computerdisplay=document.getElementById("Computerdisplay");
const resultdisplay=document.getElementById("ResultDisplay");

function playGame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    //console.log(computerchoice);
    let result="";

    if(playerchoice==computerchoice)
    {
        result="It's Tie";
    }
    else
    {
        switch(playerchoice)
        {
            case "rock":
                result=(computerchoice==="scissor")? "You win":"You Lose!";
                break;
            case "paper":
                result=(computerchoice==="rock")? "You win":"You Lose!";
                break;
            case "scissor":
                result=(computerchoice==="paper")? "You win":"You Lose!";
                break;
        }
    }
    console.log(result);
playerdisplay.textContent=`PLAYER: ${playerchoice}`;
computerdisplay.textContent=`COMPUTER: ${computerchoice}`;
resultdisplay.textContent=result;
    
}


