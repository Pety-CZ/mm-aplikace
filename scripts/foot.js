function createFoot() {
    let foot = document.getElementById('foot');
    let footData = [
        "© 2025",
        "<a href='https://github.com/Pety-CZ/mm-aplikace'>Vytvořeno</a> s ♥️",
        "Všechna práva vyhrazena"
    ];
    foot.innerHTML = footData.map(item => `<p>${item}</p>`).join('');
}