//referenciar os elementos html
if(!localStorage.getItem("idUsuario")){
    window.location.replace("Login.html")
}
document.addEventListener('DOMContentLoaded', () => {
    const agendar = document.getElementById("agendar");
    const servico = document.getElementById("servico")
    const data = document.getElementById("data")
    const hora = document.getElementById("hora")

    window.addEventListener("load", async (e) => {
        e.preventDefault();
        console.log("a")
        await fetch("http://localhost:8080/servicos")
          .then(async (res) => {
            const servicos = await res.json();
            console.log(servicos);
       
              servicos.forEach((res) => {
                let op = document.createElement("option");
                
                const id = res.idServico;
                const nome = res.nome;
                op.value = id;
                op.innerHTML = `${nome}`;
    
                servico.appendChild(op);
              });
            
          })

          .catch((erro) => {
            console.error(erro);
          });
      });
    

    agendar.addEventListener("submit", async(e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/agendamentos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
               data: data.value,
               hora: hora.value,
               servico: {
                idServico: parseInt(servico.value)
                },
                usuario:{
                    idUsuario: localStorage.getItem("idUsuario")
                } 
            })
        })
        .then(res => {
            console.log(res)
            alert("Agendamento realizado com sucesso.")
        }).catch((erro) => { console.error(erro) })

        })
    });
