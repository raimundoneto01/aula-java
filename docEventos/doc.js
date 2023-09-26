
// const container1 = document.getElementById('container1');
// const container2 = document.getElementById('container2');
const modal = document.getElementById('modal')
const btnClose = document.getElementById('close')
const abriModal = document.getElementById('openModal')
const valor01 = document.getElementById('valor1')
const valor02 = document.getElementById('valor2')
const tecValor = document.getElementById('tecValor')
const somatoria = document.getElementById('somatoria')


// function changeBgColor(){
//     container1.classList.toggle('bgBlue');
   
// }
// function changeBgColorBlac(){
   
//     container2.classList.toggle('bgBlack');
// }

function openModal(){
    // modal.style.display = "flex";
   modal.classList.remove('hidden');
   modal.classList.add('show');
   
}
function closeModal(){
    // modal.style.display = "none";
    modal.classList.remove('show');
    modal.classList.add('hidden');
}
modal.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal)
abriModal.addEventListener('click',openModal )



const buscarValor = ()=>{
    const somar = document.getElementById('valor1')
    const somar1 = document.getElementById('valor2')
     
    const total = Number((somar.value) * (somar1.value))
    somatoria.innerText = total

       console.log(total);
}

 buscarValor()
 

 tecValor.addEventListener('click', buscarValor)
 