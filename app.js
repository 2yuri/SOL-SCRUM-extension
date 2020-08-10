const div = document.getElementById("tabs_example_one");

//INPUT
const input = document.createElement('INPUT');
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Coloque a URL do background aqui !1920x1080!");
div.appendChild(input)
input.style.width = '300px';
input.style.marginLeft = '10px';


//BUTTON
const button = document.createElement('BUTTON');
button.textContent = 'ENVIAR'
div.appendChild(button)


function updateImageAtBackground(){
  const url = input.value;
  document.body.style.backgroundImage = `url(${url})`;
  console.log('clicked')
  localStorage.setItem('UrlBackground', JSON.stringify(url));
}


button.onclick = updateImageAtBackground;


//IMAGE BACKGROUND
const receive = localStorage.getItem('UrlBackground');

if (receive !== '' && receive !== undefined){  
  document.body.style.backgroundImage = `url(${JSON.parse(receive)})`;
}

