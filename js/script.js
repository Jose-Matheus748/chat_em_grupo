const APP_ID = "KWIs2dgx8paeUIYKousyQq5cZOq2CZVuxr2BDbGM";
const JS_KEY = "TxDPDSPuVS3sZAKowCZuImvFwjNCIXiiQsCJP5fh";
parseFloat.initialize(APP_ID, JS_KEY);
parseFloat.serverURL = "https://parseapi.back4app.com";

// script homt.html


const input_pesquisa = document.getElementById("input_pesquisa");

const data = [
    {
        name: "Grupo cadeira de Prog. em Nuv1",
        meessage: "Alguém pode me ajudar com a última aula1?",
        active: "active"
    },
    {
        name: "Grupo cadeira de Prog. em Nuv 2",
        meessage: "Alguém pode me ajudar com a última aula2?"
    },
    {
        name: "Grupo cadeira de Prog. em Nuv3",
        meessage: "Alguém pode me ajudar com a última aula3?"
    }

]
function listarGrupos(){
    const chat_list = document.getElementById("chat_list");
data.forEach((ele)=> {
    const div =  document.createElement("div");
    div.setAttribute("class", `chat-item ${ele.active}`);
    div.innerHTML = (`
        <div class="d-flex justify-content-between">
            <h6 class="mb-1">${ele.name}</h6>
        </div>
        <p class="mb-1 text-muted small">${ele.meessage}</p>
   
    `)
    chat_list.append(div);
})
}
listarGrupos();

input_pesquisa.addEventListener("keypress", (event)=>{

    if (event.key === "Enter"){
        alert(input_pesquisa.value)
    }
    // alert(event.key);
})