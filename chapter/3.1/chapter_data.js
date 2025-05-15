(function(){
    const has_video = false;
    const questions = false;
    window.getQuestions = () => questions;
    const chapter_info = document.getElementById('chapter-info');
    chapter_info.innerHTML = "<h2>Datové typy v Rustu</h2><p>Každá hodnota v Rustu má přiřazený datový typ. Ten určuje, jaká data mohou být v proměnné uložena a jak s nimi lze pracovat. Rust je staticky typovaný jazyk, což znamená, že datový typ proměnných musí být známý již při kompilaci. Díky tomu překladač včas odhalí chyby, které by mohly vést k nečekanému chování programu.</p><p>Rust často dokáže typ odvodit ze zadané hodnoty, přesto je u proměnných i konstant vhodné typ uvádět. Jazyk nabízí několik hlavních skupin typů – od jednoduchých čísel až po složitější struktury jako pole a k‑tice.</p><h3>Číselné typy</h3><p><strong>Celá čísla</strong> (integer) se dělí na variantu signed (se znaménkem) a unsigned (bez znaménka). K dispozici jsou šířky 8, 16, 32, 64 a 128 bitů (např. i32, u64); šířka určuje rozsah uložitelných hodnot.<br>Rozsah hodnot pro každou délku čísla se znaménkem je od -2^(n-1) do 2^(n-1)-1 včetně, kde n je bitová délka, které varianta používá. Například do datového typu i16 lze uložit hodnoty v rozsahu – (2^15) do 2^(15)-1, což jsou čísla od -32 768 až 32 767.</p><p><strong>Čísla s plovoucí desetinnou čárkou</strong> mají varianty f32 a f64. f32 zabírá méně paměti, f64 nabízí vyšší přesnost a je výchozím typem pro desetinná čísla.</p><h3>Logické a znakové typy</h3><p><strong>bool</strong> nabývá hodnot true nebo false a využívá se především v podmínkách.</p><p><strong>char</strong> ukládá jeden Unicode znak (4 B), takže podporuje písmena s diakritikou, emotikony apod.</p><h3>Textové řetězce</h3><p>Pro práci s textem se používá dynamický typ <strong>String</strong>, který rovněž využívá Unicode.</p><h3>Složené typy</h3><p><strong>Pole</strong> (array) obsahuje pevný počet prvků stejného typu; délku nelze měnit.</p><p><strong>K‑tice</strong> (tuple) umožňují kombinovat více hodnot různých typů do jednoho celku s pevnou délkou.</p>";

    

    const info = document.getElementById('extra-info');
    info.innerHTML = "Oficiální dokumentace: <a href='https://doc.rust-lang.org/book/ch03-02-data-types.html' target='_blank'>https://doc.rust-lang.org/book/ch03-02-data-types.html</a>";









    const video_container = document.getElementById('video-container');

    if (has_video) {
        video_container.hidden = false;
        video_container.style.display = "block";
    } else {
        video_container.hidden = true;
        video_container.style.display = "none";
    }

    if (!questions) {
        const quiz_container = document.getElementById('quiz-container');
        quiz_container.hidden = true;
        quiz_container.style.display = "none";
    }
    else {
        const quiz_container = document.getElementById('quiz-container');
        quiz_container.hidden = false;
        quiz_container.style.display = "block";
    }
})
();


