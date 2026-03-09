// Aqui começa o arquivo JavaScript. Este adiciona interatividade, como efeitos ao clicar. É simples para você aprender.

// Espera o documento carregar completamente.
document.addEventListener('DOMContentLoaded', function() {
    // Pega o botão e a mensagem pelo ID.
    const button = document.getElementById('interactButton'); // "Aqui pegamos o botão que você clica."
    const message = document.getElementById('message'); // "Aqui pegamos a mensagem escondida."

    // Adiciona um evento de clique ao botão.
    button.addEventListener('click', function() {
        // Mostra a mensagem mudando o display de 'none' para 'block'.
        message.style.display = 'block'; // "Isso faz a mensagem aparecer."
        
        // Muda a cor do botão para preto como efeito extra.
        button.style.backgroundColor = 'black'; // "Aqui mudamos a cor do botão ao clicar."
    });
});
