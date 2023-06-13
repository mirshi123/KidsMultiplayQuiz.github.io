    function num(){
     num1 = Math.floor(Math.random() * 11);
     num2 = Math.floor(Math.random() * 11);
    }

const text = document.getElementById("q");
const btn = document.getElementById("btn");
const scoretext = document.getElementById("score");
const hearttext = document.getElementById("heart");

const wrongtext = document.getElementById("wrong");


var score = 0;
let hearts = 3;

num();
text.innerHTML = "Whats " + num1 + " multiplay by " + num2;

function work() {
    const entry = parseInt(document.getElementById("entry").value);
    if (entry === num1 * num2) {
        console.log("done");
        num();
        text.innerHTML = "What's " + num1 + " multiplied by " + num2;

        score = score + 1;
        scoretext.innerHTML = "Score: " + score;
        wrongtext.innerHTML = "";

        if (score === 30){
            location.reload();
        }

    } else {
        

        hearts -=1;
        hearttext.innerHTML = "❤️: "+ hearts;
        wrongtext.innerHTML = "Thats wrong, you lost a heart."


        if (hearts === 0){
           location.reload();
        }
    }
}


btn.addEventListener("click", work)

