let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
document.body.classList.remove('darkmode')
localStorage.setItem('darkmode', null)
}

// Verificar o valor de darkmode no localStorage e aplicar o tema correspondente
if (darkmode === "active") {
    enableDarkmode()
} else {
    disableDarkmode()
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode'); // Atualizar a variável darkmode
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})