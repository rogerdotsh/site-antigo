const sentences = [
    "EU ODEIO CÓLICA!! ⠀⠀⠀⠀ agora é só esperar a namorada cair do céu.",
    "Oi.",
    "AMD é melhor que NVIDIA, quanto mais cedo você perceber, melhor.",
    "ERROR_404 COMEDIA_NOT_FOUND",
    "Me mama, Bill Gates.",
    "Eu devia parar de falar palavrão nessa porra.",
    "これを読んだ人は誰でも犯した",
    "omae wa mou shindeiru",
    "Cala boca, teu pai trabalha na Odebrecht mano",
    "Vem x1 no brawlhalla, lixo"
];

function showSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const chosenSentence = sentences[randomIndex];
    const sentenceElement = document.getElementById("random-sentence");
    sentenceElement.textContent = chosenSentence;

}

window.onload = showSentence;