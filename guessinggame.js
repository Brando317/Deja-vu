const input = document.getElementById("guessinput");

const firstButton = document.getElementById("guessbtn");

const firstParagraph = document.getElementById("feedback");

let sel = document.getElementById("sel");

let start = document.getElementById("start");

let rand;

start.addEventListener("click", function(e) {


    
    
    if (sel.value == "medium") {
        rand = Number((Math.random() * 100).toFixed(1))
    }
    else if (sel.value == "difficult") {
        rand = Number((Math.random().toFixed(2)))
    }
    else {
    rand = Math.floor(Math.random() * 100) + 1;
    

    }
  document.getElementById("gamepanel").classList.remove("hidden") 
    sel.disabled = true;
}
)




function playGame() {
    let guess = input.value
    if (guess <rand) {  firstParagraph.textContent = "Too Low!"}

    else if (guess == rand) {  firstParagraph.textContent = "Congratulations!"}
    
    else if (guess > rand) { firstParagraph.textContent = "Too High!"}    
}



firstButton.addEventListener("click", playGame) 