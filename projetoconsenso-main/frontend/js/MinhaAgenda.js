// //referenciar os elementos html
if (!localStorage.getItem("idUsuario")) {
    window.location.replace("Login.html");
  }
  document.addEventListener("DOMContentLoaded", () => {
    const divContainer = document.getElementById("container");
    window.addEventListener("load", async (e) => {
      e.preventDefault();
      await fetch(
        "http://localhost:8080/agendamentos/p/" +
          localStorage.getItem("idUsuario")
      )
        .then(async (res) => {
          const agendamentos = await res.json();
          console.log(agendamentos.mensagem);
          if (agendamentos.mensagem.length == 0) {
            return (divContainer.innerHTML = `<div class="alert alert-danger" role="alert" style = "text-align: center">
                                            Sem agendamentos
                                           </div>`);
          } else {
            agendamentos.mensagem.forEach((res) => {
              let div = document.createElement("div");
  
                        const nome = res.servico.nome
                       const nomeCliente = res.usuario.nome
                       const sobrenome = res.usuario.sobrenome
                       const data = res.data
                       let formData = data.split("-")
                       let dataFormated = `${formData[2]}/${formData[1]}/${formData[0]}`
                       const hora = res.hora
                       const idAgendamento = res.idAgendamento 
                       div.innerHTML = `
                       <center>
                       <div class=" bordaa1" id="deletar" style="border: 2px solid black;">
                           <label class=""><strong>${nome.toLowerCase()}</strong> </label> 
                           <div class="div-imagem" id="th">
                           <button onclick="editar(${idAgendamento})"><img src="img/edit.png" alt="" width="15px" height="15px"></button> 
                           <button onclick="apagar(${idAgendamento})" id="exclui"><img src="img/delete.png" alt=""></button></div>
                           <p><strong>Cliente: ${nomeCliente + " " + sobrenome}</strong> </p>
                           <p><strong>Data: ${dataFormated} </strong> </p>
                           <p><strong>Horário: ${hora}</strong> </p>  
                       </div>
                       </center>`
  
  
              divContainer.appendChild(div);
            });
          }
        })
        .catch((erro) => {
          console.error(erro);
        });
    });
  });
  
  function editar (id){
    localStorage.setItem("idAgendamento", id);
    window.location.href = "EditarAgendamentoPrest.html"
  }
  
  function apagar(id) {
    let apagarBotao = document.getElementById("exclui");
    apagarBotao.parentElement.parentElement.remove();
    fetch("http://localhost:8080/agendamentos/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        //alert("Deletado com sucesso.");
        location.reload();
      })
      .catch((erro) => {
        console.error(erro);
      });
  }
  
  
  