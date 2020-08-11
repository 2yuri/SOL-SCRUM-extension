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
button.style.cursor = 'pointer'
div.appendChild(button)


function updateImageAtBackground() {
  const url = input.value;

  if (url.includes('http')) {
    document.body.style.backgroundImage = `url(${url})`;
    localStorage.setItem('UrlBackground', JSON.stringify(url));

    input.value = ''

    alert('Imagem alterada com Sucesso!')
  } else {
    alert('Digite uma URL valida!')
  }

}


button.onclick = updateImageAtBackground;


//IMAGE BACKGROUND
const receive = localStorage.getItem('UrlBackground');

if (receive !== '' && receive !== undefined) {
  document.body.style.backgroundImage = `url(${JSON.parse(receive)})`;
}

