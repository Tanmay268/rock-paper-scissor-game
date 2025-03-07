let comp_choice;

const front_page = document.getElementById("front");
const options = document.querySelectorAll(".front div");
front_page.addEventListener("click",(event)=>{
    const player_choice = document.getElementById(event.target.id).id;
    console.log("You:" + player_choice);
    document.getElementById("front").style.display = "none";
    check_win(player_choice);
    
    document.getElementById("main").style.display = "flex";

    document.getElementById("player").classList.add("shake");
    document.getElementById("computer").classList.add("shake");
    
    setTimeout(()=>{
        document.getElementById("player").classList.remove("shake");
        document.getElementById("computer").classList.remove("shake");
    },1000);
    setTimeout(()=>{
        document.getElementById("player").src = "/images/" + player_choice + "-1.png";
        document.getElementById("computer").src = "/images/" + comp_choice + "-2.png";
    },1000);

});

function check_win(choice){
    const num = Math.floor(Math.random()*3+1);
    switch(num){
        case 1:
            comp_choice = "r";
            break;
        case 2:
            comp_choice = "p";
            break;
        case 3:
            comp_choice = "s";
            break;
    }
    setTimeout(()=>{
        console.log("Computer: " + comp_choice);
    
        if(choice=="p" && comp_choice=="r"){
            console.log("You Win!");
            document.querySelector(".main .middle h2").textContent = "You Win!";
            return;
        }
        else if(choice=="p" && comp_choice=="s"){
            document.querySelector(".main .middle h2").textContent = "Lost!";
            console.log("Lost!");
            return;
        }
        else if(choice=="p" && comp_choice=="p"){
            document.querySelector(".main .middle h2").textContent = "Draw!";
            console.log("Draw!");
            return;
        }
        else if(choice=="r" && comp_choice=="p"){
            console.log("Lost!");
            document.querySelector(".main .middle h2").textContent = "Lost!";
            return;
        }
        else if(choice=="r" && comp_choice=="s"){
            console.log("You win!");
            document.querySelector(".main .middle h2").textContent = "You Win!";
            return;
        }
        else if(choice=="r" && comp_choice=="r"){
            console.log("Draw!");
            document.querySelector(".main .middle h2").textContent = "Draw!";
            return;
        }
        else if(choice=="s" && comp_choice=="r"){
            console.log("Lost!");
            document.querySelector(".main .middle h2").textContent = "Lost!";
            return;
        }
        else if(choice=="s" && comp_choice=="p"){
            console.log("You win!");
            document.querySelector(".main .middle h2").textContent = "You Win!";
            return;
        }
        else if(choice=="s" && comp_choice=="s"){
            console.log("Draw!");
            document.querySelector(".main .middle h2").textContent = "Draw!";
            return;
        }
    },1000);
    
}


