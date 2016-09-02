var html = '';
var rgbColor;

function getRandomRGB() {
    return Math.floor(Math.random() * 256 );
}

function randomColor() {
  var color = 'rgb(';
  color += getRandomRGB() + ',';
  color += getRandomRGB() + ',';
  color += getRandomRGB() + ')';
  
  return color;  
}

function print(message) {
  document.write(message);
}

for ( var i=1; i<=10; i++) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);