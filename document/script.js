/* 
   *manipulação do DOM

*/
// console.log(document.getElementById('text'));
// console.log(document.querySelector('#text'));


// const doc = document.getElementById('text');

// console.log(doc.innerText = "resende neto");


function meuText (){
    const testo = document.getElementById('container')
    testo.innerHTML=` <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>`
    
    testo.addEventListener('click', meuText)
}


meuText(testo)
