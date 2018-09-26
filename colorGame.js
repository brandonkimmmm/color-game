let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init(){
    // Mode buttons event listeners
    setupModeButtons();

    // Squares event listeners
    setupSquares();

    // Set colors
    reset();

    // Reset button event listener
    resetButton.addEventListener('click', function(){
        reset();
    });
}

function setupModeButtons(){
    modeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            modeButtons.forEach((button) => {
                button.classList.remove('selected');
                console.log(button);
            });
            button.classList.add('selected');
            button.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
            reset();
        });
    });
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        // Add click listeners to squares
        squares[i].addEventListener('click', function(){
            // Grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct!';
                resetButton.textContent = 'Play Again?';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again';
            }
        });
    };
}

function reset(){
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // Change colors of squares, if no color exists then hide square
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    // Reset header background color, button text, and messageDisplay text
    resetButton.textContent = 'New Colors';
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
}

function changeColors(color){
    // Change each color to match give color
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    });
};

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(amount){
    // Make an array
    let randomColors = [];
    // Add amount random colors to array
    for(let i = 0; i < amount; i++){
        randomColors.push(randomColor());
    }
    // Return array
    return randomColors;
};

function randomColor(){
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    return 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
};