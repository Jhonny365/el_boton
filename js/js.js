
function ar() {
  setInterval(img, 50)
}

function img(){  

  let imagen= document.createElement("img")
  imagen.src= "css/li.png";
  imagen.id= "imagen"
  const bodySize = document.querySelector('body')

  let y = Math.floor (Math.random()*bodySize.clientWidth)*0.9;
  let x = Math.floor (Math.random()*bodySize.clientWidth)*0.8;
  imagen.style.rotate= Math.floor (Math.random()*360) + "deg";

  imagen.width= Math.floor(Math.random()*100);
  imagen.height= imagen.width;
  
  if ( (y >= 200 && y <= 400) && (x >= 300 && x <= 700) ) {
    console.log("1")

    if ( y >= 250 && y <= 300 ) {
      imagen.style.top= (y - 100) + "px";
    }
    else {
      imagen.style.top= (y + 100) + "px";
    }
    imagen.style.left= x + "%"
    // imagen.width= 10;
    imagen.style.border='solid white 2px'
    imagen.height= imagen.width;
    body.appendChild(imagen)
    
  }

  else {
    imagen.style.top= y + "px"
    imagen.style.left= x + "px";
    body.appendChild(imagen)
    console.log("2")
  }

}