let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function(){
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    resetButton.textContent = 'New Colors';
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
});

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
    resetButton.textContent = 'New Colors';
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
});

resetButton.addEventListener('click', function(){
    // Generate all new colors
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // Change colors of squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // Reset header background color and reset button text
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
});

// Assign colors to squares
for(let i = 0; i < squares.length; i++){
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
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