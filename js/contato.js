const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

const email = document.getElementById('email');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{
  let messages = [];
  

  if(nome.value === "" || nome.value == null){
    messages.push('Insira o Nome!')
  }

  if(!regExp.exec(email.value)){
    messages.push('Insira o Email correto!')
  }

  if(messages == ""){
    messages.push('Mensagem enviada com sucesso!')
  }

  alert(messages);
})