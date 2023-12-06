let word = 'hello';
let wordArray = word.toUpperCase().split('');
let wordLength = wordArray.length;
let countWrong = 0;
let countCorrect = 0;
let gameOver = false;
let divArray = [];


const letterButton = document.getElementsByClassName('abc');
const letterSpace = document.getElementsByClassName('letter-space');
const letterBox = document.getElementsByClassName('letter-box');
const formButton = document.getElementById('form-button');
const canvas = document.getElementById("canvas");
const all = document.querySelector('*');
const ctx = canvas.getContext("2d");



/*const handleSubmit = (event) => {
    //const word = event.target.value;
    //let wordArray = word.toUpperCase().split('');
    //let wordLength = wordArray.length;
    console.log('wordArray');
    console.log('wordLength');
}

formButton.addEventListener('click', handleSubmit);*/



function addBoxPerLetter() {
    for (let i = 0; i < wordLength; i++) {
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('letter-box');
        letterSpace[0].appendChild(divArray[i]);
    }
}

const checkLetter = () => {
    
        console.log('not game over')
        for (let i = 0; i < letterButton.length; i++) {
            letterButton[i].addEventListener('click', function handleButtonClick() {
                let isCorrect = false;
                if (!gameOver) {
                    for (let j = 0; j < wordLength; j++) {
                        if (wordArray[j] === letterButton[i].innerHTML) {
                            letterButton[i].classList.add('correct');
                            divArray[j].textContent = letterButton[i].innerHTML;
                            countCorrect++;
                            isCorrect = true; 
                            if (countCorrect === wordLength) {
                                letterSpace[0].classList.add('win');
                                setTimeout(function(){ alert('You win!'); }, 200);
                                gameOver = true;
                            }
                        }
                    }
                    if (isCorrect){ 
                        return
                    };
                    
                    
                    letterButton[i].classList.add('wrong');
                    countWrong++;
                    if (countWrong === 1) {
                        ctx.beginPath();
                        ctx.arc(200, 100, 50, 0, 2 * Math.PI);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (countWrong === 2) {
                        ctx.beginPath();
                        ctx.moveTo(200, 150);
                        ctx.lineTo(200, 300);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (countWrong === 3) {
                        ctx.beginPath();
                        ctx.moveTo(200, 300);
                        ctx.lineTo(150, 350);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (countWrong === 4) {
                        ctx.beginPath();
                        ctx.moveTo(200, 300);
                        ctx.lineTo(250, 350);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (countWrong === 5) {
                        ctx.beginPath();
                        ctx.moveTo(200, 200);
                        ctx.lineTo(150, 250);
                        ctx.stroke();
                        ctx.closePath();       
                    } else if (countWrong === 6) {
                        ctx.beginPath();
                        ctx.moveTo(200, 200);
                        ctx.lineTo(250, 250);
                        ctx.stroke();
                        ctx.closePath(); 
                        all.style.backgroundColor = 'hsla(1, 63%, 32%, .5)';
                        setTimeout(function(){ alert('You lose! The word was ' + word + '.'); }, 200);   
                        gameOver = true; 
                            
                    }
                    
                    
                }
            })
    }
     
}


        


   


const hangman = () => {  
    ctx.beginPath();
    ctx.moveTo(400, 400);
    ctx.lineTo(400, 0);
    ctx.lineTo(200, 0);
    ctx.lineTo(200, 50);
    ctx.stroke();
    ctx.closePath();
}

checkLetter();
addBoxPerLetter();
hangman();