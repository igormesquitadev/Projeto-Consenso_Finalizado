// //referenciar os elementos html
if (!localStorage.getItem("idUsuario")) {
  window.location.replace("Login.html");
}
document.addEventListener("DOMContentLoaded", () => {
  const divContainer = document.getElementById("container");
  window.addEventListener("load", async (e) => {
    e.preventDefault();
    await fetch(
      "http://localhost:8080/servicos/p/" + localStorage.getItem("idUsuario")
    )
      .then(async (res) => {
        const servicos = await res.json();
        console.log(servicos.mensagem);
        if (servicos.mensagem.length == 0) {
          return (divContainer.innerHTML = `<div class="alert alert-danger" role="alert" style = "text-align: center">
                                      Sem servicos
                                     </div>`);
        } else {
          servicos.mensagem.forEach((res) => {
            let div = document.createElement("div");

            const id = res.idServico;
            const nome = res.nome;

            div.innerHTML = `
                 <center>
                  <div class=" bordaa1" style="border: 2px solid black;">
                      <label class=""><strong>${nome}</strong> </label> 
                      <div class="div-imagem">
                          <button onclick="editar(${id})"><img src="img/edit.png" alt="" width="15px" height="15px"></a></button> 
                          <button id="exclui" onclick = "apagar(${id})"><img src="img/delete.png" alt=""></button>
                      </div>
                  </div>
                 </center>`;

            divContainer.appendChild(div);
          });
        }
      })
      .catch((erro) => {
        console.error(erro);
      });
  });
});


function editar(id){
  localStorage.setItem("idServico", id);
  window.location.href = "EditarServico.html"
}

function apagar(id) {
  let apagarBotao = document.getElementById("exclui");
  apagarBotao.parentElement.parentElement.remove();
  fetch("http://localhost:8080/servicos/" + id, {
    method: "DELETE",
  })
    .then(
      location.reload()
      )
    .catch((erro) => {
      console.error(erro);
    });
}

// function atualizar(){
//  // Make an HTTP PUT Request
//    async put(url, data) {

//     // Awaiting fetch which contains method,
//     // headers and content-type and body
//     const response = await fetch(url, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });

//     // Awaiting response.json()
//     const resData = await response.json();

//     // Return response data
//     return resData;

// }}

// const fetch = () => {
//     const url = `http://localhost:8080/servicos`
//     fetch(url)
//     .then (res => {
//         console.log(res)
//         return res.json();
//     })
// }
// fetch()
