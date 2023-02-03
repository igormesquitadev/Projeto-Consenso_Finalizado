//referenciar os elementos html
if(!localStorage.getItem("idUsuario")){
    window.location.replace("Login.html")
}
document.addEventListener('DOMContentLoaded', () => {
    const idServico = localStorage.getItem("idServico")
    const form = document.getElementById("formulario");
    const nomeInput = document.getElementById("nome")
    const descricaoInput = document.getElementById("descricao")

    window.addEventListener("load", async(e) => {
        console.log(idServico)
        e.preventDefault();
        await fetch("http://localhost:8080/servicos/" + idServico)
        .then(async (res) => {
            console.log(res)
            const out = await res.json();
            console.log(out)
            nomeInput.placeholder = out.nome;
            descricaoInput.placeholder = out.descricao;
           
        })
        
    })


    form.addEventListener("submit", async(e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/servicos", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                idServico: idServico,
               nome: nomeInput.value,
               descricao: descricaoInput.value,
               usuario: {
                idUsuario: localStorage.getItem("idUsuario")
            } 
                }
               
            )
        })
        .then(res => {
            alert("Servico atualizado com sucesso")
            window.location.href ="MeusServicos.html"
            console.log(res)
        }).catch((erro) => { console.error(erro) })

        })

})