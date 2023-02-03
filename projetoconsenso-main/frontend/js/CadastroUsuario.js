//referenciar os elementos html
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form-signin");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    
    const nome = document.getElementById("inputNome");
    const sobrenome = document.getElementById("inputSobrenome");
    const email = document.getElementById("inputEmail");
    const senha = document.getElementById("inputSenha");
    const confirmarSenha = document.getElementById("inputConfirmarSenha");
    const tipoUsuario = document.getElementById("tipoUsuario");
  
    validarEntradas(nome, sobrenome, email, senha, confirmarSenha, tipoUsuario)


})
  
})


function validarEntradas(n, sn, e, s, cs, tu) {
  const nomeValue = String(n.value);
  const sobrenomeValue = String(sn.value);
  const emailValue = String(e.value);
  const senhaValue = String(s.value);
  const confirmarSenhaValue = String(cs.value)
  const tipoUsuarioValue = Number(tu.value);

  if (validarNome(nomeValue)) {
    const p = document.getElementById("nome-invalido");
   inputNome.className = "form-control is-valid";
   p.style.display = "none";
  }else{
    const p = document.getElementById("nome-invalido");
   inputNome.className = "form-control is-invalid";
   p.style.display = "block";
  }


  if (validarNome(sobrenomeValue)){
    const p = document.getElementById("sobrenome-invalido");
    inputSobrenome.className = "form-control is-valid";
    p.style.display = "none";
  }else{
    const p = document.getElementById("sobrenome-invalido");
    inputSobrenome.className = "form-control is-invalid";
    p.style.display = "block";
  }

  if (validarEmail(emailValue)) {
    const p = document.getElementById("email-invalido");
    inputEmail.className = "form-control is-valid";
    p.style.display = "none";
  }
  else if (!validarEmail(emailValue)) {
    const p = document.getElementById("email-invalido");
    console.log("Formato de email inválido");
    inputEmail.className = "form-control is-invalid";
    p.style.display = "block";
  }
  if(validarSenhaUsuario(senhaValue)){
    const p1 = document.getElementById("senha-invalido");
    s.className = "form-control is-valid";
    p1.style.display = "none";
  }

  
  if(confirmarSenhaValue === senhaValue && validarSenhaUsuario(senhaValue)){
    const p2 = document.getElementById("confirmarsenha-invalido");  
    cs.className = "form-control is-valid";
    p2.style.display = "none";
    if(validarEmail(emailValue)){
      if(validarNome(nomeValue) && validarNome(sobrenomeValue)){

      
    fetch("http://localhost:8080/users", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          { 
              nome: nomeValue,
              sobrenome: sobrenomeValue,
              email: emailValue,
              senha: senhaValue,
              tipoUsuario: {
                idTipoUsuario: tipoUsuarioValue
              }
          }
    )
})
    .then((res) => {
        console.log(res)
        alert("Cadastrado com sucesso")
        window.location.replace("Login.html")
        // localStorage.setItem("idUsuario", data.idUsuario);
        // const idUsuario = localStorage.getItem("idUsuario");
        // Redirecionar para uma página (ex. Home)
        // window.location.href("home.html")
    })
    .catch((erro) => { console.error(erro) })
    }
    }
  }
      else{
        const p = document.getElementById("confirmarsenha-invalido");
        cs.className = "form-control is-invalid";
        p.style.display = "block";
      }

   if(!validarSenhaUsuario(senhaValue)){
    console.log(validarSenhaUsuario(senhaValue))
    const p = document.getElementById("senha-invalido");
    s.className = "form-control is-invalid";
     p.style.display = "block";
  }
}
function validarSenhaUsuario(senhaUsuario){
  let regexSenha =/^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/
  return regexSenha.test(senhaUsuario)
}

function validarEmail(ev) {
  let re = /\S+@\S+\.\S+/;
  return re.test(ev);
}
function validarNome(nv) {
  let rn = /[A-Z][a-z].*/;
  return rn.test(nv);
}




