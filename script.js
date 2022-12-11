
const menu = (() => {
    const playBtn = document.querySelector("#playBtn");
    const options = document.querySelector(".options");
    const optionsBtns = document.querySelector(".optionsBtns");
    const closeOptionsBtn = document.querySelector("#closeOptionsBtn");
    const playerBtn = document.querySelector("#playerBtn")
    const activateOptions = ()=> {
        options.classList.add("active");
        optionsBtns.classList.add("active");
    }
    const exitOptions = ()=> {
        options.classList.remove("active");
        optionsBtns.classList.remove("active");
    }
    const create = ()=> {
        playBtn.addEventListener('click', activateOptions);
        options.addEventListener('click', exitOptions);
        closeOptionsBtn.addEventListener('click', exitOptions);
        optionsBtns.addEventListener('click', (event)=>{event.stopPropagation();});
        playerBtn.addEventListener('click', playerGame);
    }
    const playerGame = ()=> {
        gameboard.startPlayerGame();
        menu.exitOptions();
    }
    return {create, exitOptions, activateOptions};
})();
const playerFactory = (xo)=> {
    return {xo, }
}
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
            i++;
        });
    }
    const clear = ()=> {
        boardArray = ["", "", "", "", "", "", "", "", ""];
        render();
    }
    const placeEvent = (index)=> {
        if(boardArray[index] === "") {
            console.log(round);
            if(round%2 == 1) {
                boardArray[index] = "X";
            }
            else {
                boardArray[index] = "O";
            }
            round++;
            console.log(checkWin());
            render();
        }
    }
    const checkWin = ()=> {
        switch(true) {
            case boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2] && boardArray[0] !== "":
            case boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6] && boardArray[0] !== "":
            case boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8] && boardArray[0] !== "":
                //return boardArray[0] + " WON";
                menu.activateOptions();
                break;
            case boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8] && boardArray[2] != "":
            case boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6] && boardArray[2] != "":
                //return boardArray[2] + " WON";
                break;
            case boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5] && boardArray[3] != "":
                //return boardArray[3] + " WON";
                break;
            case boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8] && boardArray[6] != "":
                //return boardArray[6] + " WON";
                break;
            case boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7] && boardArray[1] != "":
                //return boardArray[1] + " WON";
                break;
            case round === 10:
                return "DRAW";
                break;
            default:
                return false;
        }

    }
    let round;
    const startPlayerGame = ()=> {
        clear();
        round = 1;
        boardCells.forEach((element, index)=> {
            const placeEvent = ()=> {
                if(boardArray[index] === "") {
                    console.log(round);
                    if(round%2 == 1) {
                        boardArray[index] = "X";
                    }
                    else {
                        boardArray[index] = "O";
                    }
                    round++;
                    console.log(checkWin());
                    render();
                }
            }
            element.addEventListener('click', placeEvent);
        });        
    }
    return {render, startPlayerGame};
})();




menu.create();
