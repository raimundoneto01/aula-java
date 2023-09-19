// const container = document.getElementById('container')
// const p = document.createElement('p')
// container.appendChild(p)
// p.innerText = 'teste aqui'

// p.classList.add('hilden')
// p.classList.remove('hilden')
// p.classList.add('show')


// p.classList.toggle('hilden')



const conta = document.getElementById('container')
const p = document.createElement('p')
const h1 = document.createElement('h1')
conta.appendChild(p)
conta.appendChild(h1)
p.innerText = 'o texto do paragrafo p'
h1.innerText = 'o texto do h1'

p.setAttribute('class', 'parag')
h1.setAttribute('class', 'h1')