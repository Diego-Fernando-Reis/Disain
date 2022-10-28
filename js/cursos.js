const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const esvaziar = document.getElementById('esvaziar');
const compras = document.getElementById('compras');
const valor = document.getElementById('valor');

let valorTotal = 0;

btn1.addEventListener('click', ()=>{
  compras.innerHTML = compras.innerHTML + '<p>UX/UI</p>';
  valorTotal = valorTotal + 112,00;
  btn1.disabled = true;
  btn1.style.backgroundColor = '#ccc'
  if(valorTotal >= 112 * 6){
    valorTotal = 359.89;
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }else{
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }
})

btn2.addEventListener('click', ()=>{
  compras.innerHTML = compras.innerHTML +  '<p>FRONT-END</p>';
  valorTotal = valorTotal + 112,00;
  btn2.disabled = true;
  btn2.style.backgroundColor = '#ccc'
  if(valorTotal >= 112 * 6){
    valorTotal = 359.89;
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }else{
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }
})

btn3.addEventListener('click', ()=>{
  compras.innerHTML = compras.innerHTML +  '<p>BACK-END</p>';
  valorTotal = valorTotal + 112,00;
  btn3.disabled = true;
  btn3.style.backgroundColor = '#ccc'
  if(valorTotal >= 112 * 6){
    valorTotal = 359.89;
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }else{
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }
})

btn4.addEventListener('click', ()=>{
  compras.innerHTML = compras.innerHTML +  '<p>FULL-STACK</p>';
  valorTotal = valorTotal + 112,00;
  btn4.disabled = true;
  btn4.style.backgroundColor = '#ccc'
  if(valorTotal >= 112 * 6){
    valorTotal = 359.89;
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }else{
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }
})

btn5.addEventListener('click', ()=>{
  compras.innerHTML = compras.innerHTML +  '<p>WEB-DESIGNER</p>';
  valorTotal = valorTotal + 112,00;
  btn5.disabled = true;
  btn5.style.backgroundColor = '#ccc'
  if(valorTotal >= 112 * 6){
    valorTotal = 359.89;
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }else{
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }
})

btn6.addEventListener('click', ()=>{
  compras.innerHTML = compras.innerHTML +  '<p>COPYWRITING</p>';
  valorTotal = valorTotal + 112,00;
  btn6.disabled = true;
  btn6.style.backgroundColor = '#ccc'
  if(valorTotal >= 112 * 6){
    valorTotal = 359.89;
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }else{
    valor.innerHTML = `<p>R$ ${valorTotal}</p>`
  }
})

esvaziar.addEventListener('click', ()=>{
  btn1.disabled = false;
  btn1.style.backgroundColor = '#015958'
  btn2.disabled = false;
  btn2.style.backgroundColor = '#015958'
  btn3.disabled = false;
  btn3.style.backgroundColor = '#015958'
  btn4.disabled = false;
  btn4.style.backgroundColor = '#015958'
  btn5.disabled = false;
  btn5.style.backgroundColor = '#015958'
  btn6.disabled = false;
  btn6.style.backgroundColor = '#015958'
  compras.innerHTML = '';
  valor.innerHTML = `<p>R$ 0</p>`
  valorTotal = 0;
})

