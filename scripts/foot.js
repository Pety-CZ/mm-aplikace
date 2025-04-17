function createFoot() {
    let foot = document.getElementById('foot');
    let footData = [
        "© 2025 E-learning Rust",
        "Vytvořil <a href='https://github.com/Pety-CZ/mm-aplikace'>Petr Novák</a> s ♥️",
        "Všechna práva vyhrazena"
    ];
    foot.innerHTML = footData.map(item => `<p>${item}</p>`).join('');
}