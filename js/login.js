// const APP_ID = "KWIs2dgx8paeUIYKousyQq5cZOq2CZVuxr2BDbGM";
// const JS_KEY = "TxDPDSPuVS3sZAKowCZuImvFwjNCIXiiQsCJP5fh";
// parseFloat.initialize(APP_ID, JS_KEY);
// parseFloat.serverURL = "https://parseapi.back4app.com";


Parse.initialize("H8shqsZ1QatuWERbqbvK8QnQFvqHrHex923rlVYW", "GsbPjHZADCACyVk5hAvrde6BdetxtQyoObr9aw7Z");
Parse.serverURL = "https://parseapi.back4app.com";

document.querySelector(".btn-login").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const user = await Parse.User.logIn(email, senha);
        alert("Login bem-sucedido!");
        window.location.href = "home.html";
    } catch (error) {
        alert("Erro no login: " + error.message);
    }
}
);


