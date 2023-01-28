let contador = 0;
function add(a){
    contador += 1;
    if (contador % 2 == 0){
        document.getElementById(a).textContent = "O";
    }
    else{
        document.getElementById(a).textContent = "X";
    }
}

let q1 = document.getElementById("1");
let q2 = document.getElementById("2");
let q3 = document.getElementById("3");
let q4 = document.getElementById("4");
let q5 = document.getElementById("5");
let q6 = document.getElementById("6");
let q7 = document.getElementById("7");
let q8 = document.getElementById("8");
let q9 = document.getElementById("9");

function reiniciar(){
    document.getElementById("winMessage").textContent = "Tic Tac Toe";
    contador = 0;
    document.getElementById("stop").style.display = "none";
    q1.textContent = "";
    q2.textContent = "";   
    q3.textContent = "";   
    q4.textContent = "";   
    q5.textContent = "";   
    q6.textContent = "";   
    q7.textContent = "";   
    q8.textContent = "";   
    q9.textContent = "";   
}

q1.addEventListener("click", function(){add("1")});
q2.addEventListener("click", function(){add("2")});
q3.addEventListener("click", function(){add("3")});
q4.addEventListener("click", function(){add("4")});
q5.addEventListener("click", function(){add("5")});
q6.addEventListener("click", function(){add("6")});
q7.addEventListener("click", function(){add("7")});
q8.addEventListener("click", function(){add("8")});
q9.addEventListener("click", function(){add("9")});

function winner(b){
    document.getElementById("winMessage").textContent = `${b} ganhou`;
    stop = document.getElementById("stop").style;
    stop.display = "block";
}

let area = document.getElementById("areaJogo");
area.addEventListener("click", function(){
    // Horizontal X
    if (q1.textContent == "X" && q2.textContent == "X" && q3.textContent == "X"){
        winner("X");
    }
    else if (q4.textContent == "X" && q5.textContent == "X" && q6.textContent == "X"){
        winner("X");
    }
    else if (q7.textContent == "X" && q8.textContent == "X" && q9.textContent == "X"){
        winner("X");
    }

    // Horizontal O
    if (q1.textContent == "O" && q2.textContent == "O" && q3.textContent == "O"){
        winner("O");
    }
    else if (q4.textContent == "O" && q5.textContent == "O" && q6.textContent == "O"){
        winner("O");
    }
    else if (q7.textContent == "O" && q8.textContent == "O" && q9.textContent == "O"){
        winner("O");
    }

    // Vertical X
    if (q1.textContent == "X" && q4.textContent == "X" && q7.textContent == "X"){
        winner("X");
    }
    else if (q2.textContent == "X" && q5.textContent == "X" && q8.textContent == "X"){
        winner("X");
    }
    else if (q3.textContent == "X" && q6.textContent == "X" && q9.textContent == "X"){
        winner("X");
    }

    // Vertical O
    if (q1.textContent == "O" && q4.textContent == "O" && q7.textContent == "O"){
        winner("O");
    }
    else if (q2.textContent == "O" && q5.textContent == "O" && q8.textContent == "O"){
        winner("O");
    }
    else if (q3.textContent == "O" && q6.textContent == "O" && q9.textContent == "O"){
        winner("O");
    }

    // Diagonal X
    if (q1.textContent == "X" && q5.textContent == "X" && q9.textContent == "X"){
        winner("X");
    }
    else if (q3.textContent == "X" && q5.textContent == "X" && q7.textContent == "X"){
        winner("X");
    }
    // Diagonal O
    if (q1.textContent == "O" && q5.textContent == "O" && q9.textContent == "O"){
        winner("O");
    }
    else if (q3.textContent == "O" && q5.textContent == "O" && q7.textContent == "O"){
        winner("O");
    }


})
