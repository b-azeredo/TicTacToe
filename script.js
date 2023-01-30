function add(a){
    if (quadrado[a].textContent == ""){
        contador += 1;
        if (contador % 2 == 0){
            quadrado[a].textContent = "O";
        }
        else{
            quadrado[a].textContent = "X";
        }
    }
}

function reiniciar(){
    document.getElementById("winMessage").textContent = "Tic Tac Toe";
    contador = 0;
    document.getElementById("stop").style.display = "none";
    for (let i = 0; i < 9; i++){
        quadrado[i].textContent = "";
    } 
}

function winner(b){
    document.getElementById("winMessage").textContent = `O jogador '${b}' ganhou`;
    document.getElementById("stop").style.display = "block";
}

let contador = 0;
let quadrado = document.getElementsByClassName("quadrado");
let area = document.getElementById("areaJogo");
for (let i2 = 0; i2<9; i2++){
    quadrado[i2].addEventListener("click", function(){add(i2)})
}

area.addEventListener("click", function(){
    // Horizontal X
    if (quadrado[0].textContent == "X" && quadrado[1].textContent == "X" && quadrado[2].textContent == "X"){winner("X");}
    else if (quadrado[3].textContent == "X" && quadrado[4].textContent == "X" && quadrado[5].textContent == "X"){winner("X");}
    else if (quadrado[6].textContent == "X" && quadrado[7].textContent == "X" && quadrado[8].textContent == "X"){winner("X");}
    // Horizontal O
    if (quadrado[0].textContent == "O" && quadrado[1].textContent == "O" && quadrado[2].textContent == "O"){winner("O");}
    else if (quadrado[3].textContent == "O" && quadrado[4].textContent == "O" && quadrado[5].textContent == "O"){winner("O");}
    else if (quadrado[6].textContent == "O" && quadrado[7].textContent == "O" && quadrado[8].textContent == "O"){winner("O");}
    // Vertical X
    if (quadrado[0].textContent == "X" && quadrado[3].textContent == "X" && quadrado[6].textContent == "X"){winner("X");}
    else if (quadrado[1].textContent == "X" && quadrado[4].textContent == "X" && quadrado[7].textContent == "X"){winner("X");}
    else if (quadrado[2].textContent == "X" && quadrado[5].textContent == "X" && quadrado[8].textContent == "X"){winner("X");}
    // Vertical O
    if (quadrado[0].textContent == "O" && quadrado[3].textContent == "O" && quadrado[6].textContent == "O"){winner("O");}
    else if (quadrado[1].textContent == "O" && quadrado[4].textContent == "O" && quadrado[7].textContent == "O"){winner("O");}
    else if (quadrado[2].textContent == "O" && quadrado[5].textContent == "O" && quadrado[8].textContent == "O"){winner("O");}
    // Diagonal X
    if (quadrado[0].textContent == "X" && quadrado[4].textContent == "X" && quadrado[8].textContent == "X"){winner("X");}
    else if (quadrado[2].textContent == "X" && quadrado[4].textContent == "X" && quadrado[6].textContent == "X"){winner("X");}
    // Diagonal O
    if (quadrado[0].textContent == "O" && quadrado[4].textContent == "O" && quadrado[8].textContent == "O"){winner("O");}
    else if (quadrado[2].textContent == "O" && quadrado[4].textContent == "O" && quadrado[6].textContent == "O"){winner("O");}
    let contador30 = 0;
    for (let c = 0; c<9; c++){
        if(quadrado[c].textContent != ""){
            contador30++;
        } 
    }
    if (contador30 == 9){
        document.getElementById("winMessage").textContent = `Empate`;
    } else{
        contador30 = 0;
    }
});