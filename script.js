// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de toggle (remova o segundo botão do HTML)
    const toggleBtn = document.querySelector('.language-toggle-btn');
    
    // Estado inicial do idioma
    let isEnglish = false;

    // Função para trocar o idioma
    function toggleLanguage() {
        const elements = document.querySelectorAll('[data-en][data-pt]');
        
        isEnglish = !isEnglish; // Inverte o estado
        
        elements.forEach(element => {
            const textContent = isEnglish ? element.dataset.en : element.dataset.pt;
            
            // Se o texto contém HTML (como tags span), usa innerHTML
            if (textContent.includes('<')) {
                element.innerHTML = textContent;
            } else {
                element.textContent = textContent;
            }
        });

        // Atualiza o lang do HTML
        document.documentElement.lang = isEnglish ? 'en' : 'pt';
    }

    // Adiciona o evento de click ao botão
    toggleBtn.addEventListener('click', toggleLanguage);
});