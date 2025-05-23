document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const messageInput = document.querySelector('.message-input input');
    const sendButton = document.querySelector('.message-input .btn-primary');
    const messagesContainer = document.querySelector('.messages-container');
    
    // Função para adicionar uma nova mensagem
    function addMessage(content, isSent = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
        
        const messageContent = document.createElement('p');
        messageContent.className = 'mb-1';
        messageContent.textContent = content;
        
        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        
        // Formatar hora atual
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        
        messageTime.innerHTML = isSent 
            ? `${timeString} <i class="bi bi-check2-all text-primary"></i>`
            : timeString;
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        
        // Se for mensagem recebida, adicionar nome do remetente
        if (!isSent) {
            const senderName = document.createElement('div');
            senderName.className = 'fw-bold';
            senderName.textContent = 'Remetente';
            messageDiv.insertBefore(senderName, messageContent);
        }
        
        messagesContainer.appendChild(messageDiv);
        
        // Rolagem automática para a nova mensagem
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Enviar mensagem ao clicar no botão
    sendButton.addEventListener('click', function() {

        const message = messageInput.value.trim();
        const st = document.getElementById("chat_select").value;
        const chat = document.getElementById(`chat_${st+1}`);
        if (message) {
            addMessage(message);
            messageInput.value = '';
            chat.textContent = message;

        }
    });
    
    // Enviar mensagem ao pressionar Enter
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const message = messageInput.value.trim();
            if (message) {
                addMessage(message);
                messageInput.value = '';
            }
        }
    });
    
    // Simular mensagens recebidas (para teste)
    function simulateReceivedMessage() {
        const responses = [
            "Olá! Como posso ajudar?",
            "Entendi sua dúvida",
            "Vou verificar isso para você",
            "Ótima pergunta!",
            "Precisa de mais alguma informação?"
        ];
        
        setTimeout(() => {
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, false);
        }, 1000 + Math.random() * 4000);
    }
    
    // Opcional: descomente para simular respostas automáticas
    // messageInput.addEventListener('input', function() {
    //     if (Math.random() > 0.7) { // 30% de chance de responder
    //         simulateReceivedMessage();
    //     }
    // });

    function gerarListChat(){
        const chats = [
            {
                id:1,
                title: "Grupo cadeira de Prog. em Nuv",
                mess:"Ultima mensagem enviada"
            },
            {
                id:2,
                title: "Grupo cadeira prog. em Java",
                mess: "Vai ter prova hoje?"
            },
            {
                id:3,
                title: "Grupo caminhada noite Unifor",
                mess:"Não vou poder ir para a caminhada amanhã"
            }

        ]
        chats_list = document.getElementById("chat-list")

        chats.forEach((ele, i) =>{
            const div = document.createElement("div");
            const st = document.getElementById("chat_select");
            let status = "";
            if (i == 0){
                status = "active"
                st.value = 1;
            }
            else{
                status=""
            }
            div.innerHTML = (`
                <div class="chat-item ${status}">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-1">${ele.title}</h6>
                    </div>
                    <p class="mb-1 text-muted small" id="chat_${i}">${ele.mess}</p>
                </div>
        `)
            chats_list.appendChild(div);
            document.getElementById(`chat_${i}`).addEventListener("click", ()=> {
                
                st.value = i+1;
                
            })
        })
    }

    gerarListChat();
});
