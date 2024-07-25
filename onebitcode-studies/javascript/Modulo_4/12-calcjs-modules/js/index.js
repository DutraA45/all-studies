import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

// Terceira Função - Associação do valor do botão com o do input
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", handleButtonPress)
})

// Quarta Função - Limpa o input (botão clear)
document.getElementById("clear").addEventListener("click", handleClearButton)

// Primeira Função - Comportamento após clicar nas teclas
document.getElementById("input").addEventListener("keydown", handleTyping)

// Segunda Função - Calcular
document.getElementById("equal").addEventListener("click", calculate)

// Sexta Função - Configuração do botão Copy
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

// Quinta função - Alterar o tema
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)