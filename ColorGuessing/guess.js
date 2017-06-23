var colorsArr = [];
var randomNum = [0,0,0];
var rgbStr = "";
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".squares");
var pickedColor = document.getElementById("picked");
var msg = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var bgColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color');

function init(){
  //generate 6 colors by default
  colorsArr = generateColors(randomNum, rgbStr, 6, squares);
  pickColor(6);

  easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    resetFunction(3);
  })

  hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    resetFunction(6);
  })

  // eventlistener to check if reset button is clicked
  resetButton.addEventListener("click",function(){
    resetFunction(colorsArr.length);
  });

  //main part
  for(var i=0;i<squares.length;i++){
    // add click listeners
    squares[i].addEventListener("click",function(){
      // check if the square is the correct one
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor.textContent){
        changeColors(clickedColor,msg);
      }
      else{
        this.style.backgroundColor = bgColor;
        msg.textContent = "Try again!";
      }
    });
  }
}

//will get a sequence of random rgb number each time ex.(0,0,0)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// will get the random rgb colors array
function getRandomRGB(randomArr){
    for(var i = 0; i< randomArr.length;i++){
      randomArr[i] = getRandomIntInclusive(0,255);
    }
    return randomArr;
}

// make a combine the rgb codes into a string
function getRandomStr(rgbArr){
  var str = "rgb("
  for(var i = 0; i< rgbArr.length;i++){
    if(i === rgbArr.length-1){
      str = str+rgbArr[i]+")";
    }
    else{
      str = str + rgbArr[i] + ", ";
    }
  }
  return str;
}

//codes to generate colors arrays
function generateColors(randomNum, rgbStr, times){
  var colors = [];
  for(var i =0;i<times;i++){
    randomNum = getRandomRGB(randomNum);
    rgbStr = getRandomStr(randomNum);
    colors[i] = rgbStr;
    squares[i].style.backgroundColor = colors[i];
  }
  return colors;
}

function pickColor(num){
  pickedColor.textContent = colorsArr[getRandomIntInclusive(0,num-1)];
}

// function for changing all the colors if the guess is correct
function changeColors(clickedColor, msg){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = pickedColor.textContent;
  }
  h1.style.backgroundColor = clickedColor;
  msg.textContent ="Correct!";
  resetButton.textContent = "play again?";
}


function resetFunction(colorsLength){
  //re-generateColors
  colorsArr = generateColors(randomNum,rgbStr,colorsLength,squares);
  // reset background color and pick new color to guess
  h1.style.backgroundColor = "steelblue";
  msg.textContent = "";
  pickColor(colorsLength);
  for(var i =0;i<squares.length;i++){
    if(colorsArr[i]){
      squares[i].style.display = "block";
    }
    else{
      squares[i].style.display = "none";
    }
  }
  resetButton.textContent = "New colors";
}

init();
