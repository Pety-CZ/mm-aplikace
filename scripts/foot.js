function createFoot() {
    let foot = document.getElementById('foot');
    let footData = [
        "© 2025, Všechna práva vyhrazena",
        "<a href='https://github.com/Pety-CZ/mm-aplikace'>Vytvořeno</a> s ♥️"
    ];
    foot.innerHTML = footData.map(item => `<p>${item}</p>`).join('');
}