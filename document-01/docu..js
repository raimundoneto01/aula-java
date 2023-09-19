// const p = document.createElement('p');
// const container = document.getElementById('container');

// // appendChild -> adiciona do final do elemento..
// container.appendChild(p)

// // adiciona o elemento antes do elemento container..
// container.insertBefore(p, container.firstChild)

// const h1 = document.createElement('h1');
// const p = document.createElement('p');
// h1.innerHTML = `<ol><li>modifiquei</li></ol>`;
// p.innerHTML= 'segundo modificado';

// const element = document.getElementById('container')
// element.insertBefore(h1, element.firstChild)

// element.appendChild(p)
// element.removeChild(h1)
// element.removeChild(p)

const conte = document.getElementById("container");
let isLive = true;

conte.addEventListener("click", function () {
  if (!isLive) {
    conte.innerHTML = `<Button>ABRIR</Button>`;
    isLive = true;
  } else {
    conte.innerHTML = `<div>MEU NOME É NETO! <Button>FECHAR</Button></div>`;
    isLive = false;
  }
});
