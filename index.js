const rockPaperScissors = (move) => {
    const randomGen = () => {
        return Math.ceil(Math.random() * 3)
    }
    let randomMove = randomGen();
    if(move !== "rock" || move !== "paper" || move !== "scissors"){
        return "Invalid move"
    }
    else if(move === randomMove){
        console.log("Draw")
        return;
    }
    else if(move === "rock" ){
        console.log("")
        return;
    }
    
}