(function(){
    const has_video = false;
    const questions = false;;
    window.getQuestions = () => questions;
    const chapter_info = document.getElementById('chapter-info');
    chapter_info.innerHTML = "<p><strong>Tip k úspěchu:</strong> Než se ponoříte do lekcí, ujistěte se, že ovládáte <em>základy angličtiny</em> (většina dokumentace a chybových hlášení je v AJ) a máte jistotu v běžném <em>ovládání počítače</em> – instalace programů, práce se soubory a používání příkazové řádky.<br>Díky tomu se budete moci plně soustředit na samotný obsah kurzu a získáte rychlejší pokrok.</p>";


    















    const video_container = document.getElementById('video-container');

    if (has_video) {
        video_container.hidden = false;
        video_container.style.display = "block";
    } else {
        video_container.hidden = true;
        video_container.style.display = "none";
    }

    if (!questions){
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


