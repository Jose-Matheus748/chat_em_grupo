// const APP_ID = "KWIs2dgx8paeUIYKousyQq5cZOq2CZVuxr2BDbGM";
// const JS_KEY = "TxDPDSPuVS3sZAKowCZuImvFwjNCIXiiQsCJP5fh";
// parseFloat.initialize(APP_ID, JS_KEY);
// parseFloat.serverURL = "https://parseapi.back4app.com";


Parse.initialize("H8shqsZ1QatuWERbqbvK8QnQFvqHrHex923rlVYW", "GsbPjHZADCACyVk5hAvrde6BdetxtQyoObr9aw7Z");
Parse.serverURL = "https://parseapi.back4app.com";

document.querySelector("#btn-cadastro").addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const name = document.getElementById("name").value;

    if (!name || !senha || !email){
        alert("Preencha seus dados corretamente.")
    }
    else{

        const newUser = new Parse.User();
        newUser.set("username", email);
        newUser.set("name", name);
        newUser.set("email", email);
        newUser.set("password", senha);

        try {
            
            await newUser.signUp();
            alert("Usuário Cadastrado com sucesso!");
            // window.location.href = "home.html";

        } catch (error) {
            alert("Erro no cadastro: " + error.message);
        }
    }
}
);


