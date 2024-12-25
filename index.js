var donwload_btn = document.getElementById("downloadBtn");

var source_code_btn = document.getElementById("sourceCodeBtn");

donwload_btn.addEventListener("click", function () {
    window.open("https://github.com/Alabfa/football_quiz/releases/download/1.0.0/app-release.apk", "_blank");
});

source_code_btn.addEventListener("click", function () {
    window.open("https://github.com/Alabfa/football_quiz", "_blank");
});