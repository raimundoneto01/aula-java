const container= document.getElementById('container')
const p = document.createElement('p')
container.appendChild(p)

p.innerText = 'ex: Texto'

/* adicionar o atributo  */
p.setAttribute('class', 'texto')
p.setAttribute('id', 'palavras')

/* remover o atributo  */
p.removeAttribute('id')



console.log(p.getAttribute('class'));
console.log(p.getAttribute('id'));