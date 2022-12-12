
const menu = (() => {
    const playBtn = document.querySelector("#playBtn");
    const create = ()=> {
        playBtn.addEventListener('click', startGame);
    }
    const startGame = ()=> {
        playBtn.textContent = "Play";
        gameboard.start();
    }
    return {create, playBtn};
})();
const gameboard = (()=> {
    let boardArray = ["A", "B", "C", "D", "E", "F", "", "", ""];
    const boardXOCells = document.querySelectorAll(".xo");
    const boardCells = document.querySelectorAll(".cell");
    const render = ()=> {
        let i = 0;
        boardXOCells.forEach((element)=> {
            element.textContent = boardArray[i];
            if(boardArray[i] != "") {
                element.parentNode.classList.add("occupied");
            }
            else {
                element.parentNode.classList.remove("occupied");
                element.classList.remove("won");
                element.classList.remove("draw");
            }
            i++;
        });
    }
    const clear = ()=> {
        boardArray = ["", "", "", "", "", "", "", "", ""];
        render();
    }
    const checkWinAux = (i1, i2, i3)=> {
        if(boardArray[i1] === boardArray[i2] && boardArray[i1] === boardArray[i3] && boardArray[i1] !== "") {
            boardXOCells[i1].classList.add("won");
            boardXOCells[i2].classList.add("won");
            boardXOCells[i3].classList.add("won");
            return true;
        }
        else {
            return false;
        }
    }
    const checkWin = ()=> {
        switch(true) {
            case checkWinAux(0, 1, 2):
            case checkWinAux(3, 4, 5):
            case checkWinAux(6, 7, 8):
            case checkWinAux(0, 3, 6):
            case checkWinAux(1, 4, 7):
            case checkWinAux(2, 5, 8):
            case checkWinAux(0, 4, 8):
            case checkWinAux(2, 4, 6):
                return true;
                break;
            default:
                return false;
        }
    }

    function placeEvent(event) {
        const aux = event.target.dataset.position;
        if (boardArray[aux] === "") {
            if(round%2===1) {
                boardArray[aux] = "X";
            }
            else {
                boardArray[aux] = "O";
            }
            render();
            if(checkWin()===true) {
                console.log(boardArray[aux]);
                boardCells.forEach((element)=> {
                    element.removeEventListener("click", placeEvent, true);
                });
                menu.playBtn.textContent = "Play Again";
            }
            else if(round===9) {
                menu.playBtn.textContent = "Play Again";
                boardXOCells.forEach((element)=> {
                    element.classList.add("draw");
                    
                })
            }
            round++;
        }
    }
    let round;
    const start = ()=> {
        clear();
        round = 1;
        boardCells.forEach((element)=> {
            element.addEventListener("click", placeEvent, true);
        });  
    }
    return {start, clear};
})();
menu.create();
