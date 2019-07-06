function getValue () {
  let inputValue = prompt('Enter value');
  if (inputValue[0] === '#') {
    inputValue = inputValue.slice(1);
  }
  return inputValue;
}

function isHexValid (hex) {
    if (hex.length !== 6) {
      return false;
    }

    for (char of hex) {
      let decChar = parseInt(char, 16);
      if (Number.isNaN(decChar) == true) {
        return false;
      }
    }
    return true;
}

function isRgbValid (rgb) {
  let rgbArray = rgb.split(',');
  if (rgbArray.length !== 3) return false;
  for (value of rgbArray) {
    value = parseInt(value,10);
    if ((Number.isNaN(value)) || (value < 0) || (value > 255)) return false;
  }
  return true;
}

function convertHexToRGB(inputValue) {
    let redValue = inputValue.slice(0,2);
    redValue = parseInt(redValue, 16);
    let greenValue = inputValue.slice(2,4);
    greenValue = parseInt(greenValue, 16);
    let blueValue = inputValue.slice(0,2);
    blueValue = parseInt(blueValue, 16);
    let rgbValue = redValue + ',' + greenValue + ',' + blueValue;
    alert(`Hex #${inputValue} = RGB ${rgbValue}`);
}

function convertRgbToHex(rgb) {
  let rgbArray = rgb.split(',');
  rgbArray[0] = parseInt(rgbArray[0],10);
  rgbArray[1] = parseInt(rgbArray[1],10);
  rgbArray[2] = parseInt(rgbArray[2],10);
  let hexRed = rgbArray[0].toString(16);
  let hexGreen = rgbArray[1].toString(16);
  let hexBlue = rgbArray[2].toString(16);
  let hex = hexRed + hexGreen + hexBlue;
  alert(`RGB ${inputValue} = Hex ${hex}`);
}

// ****MAIN CODE (this would be the "converting" function)

let inputValue = getValue();

if (isHexValid(inputValue)) {
    convertHexToRGB(inputValue);
} else if (isRgbValid(inputValue)) {
    convertRgbToHex(inputValue);
  }
else {
  alert('Invalid Input');
}
