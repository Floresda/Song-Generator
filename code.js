$(document).ready(function() {

    const upbeatVerses = ["I'm feeling so alive", "Sunshine fills the air", "Dancing through the night"];
    const melancholyVerses = ["Tears fall like rain", "Loneliness fills the void", "Echoes of a broken heart"];
    

    $("#insertVerseBtn").click(function() {
        const verse = $("#verseInput").val();
        const theme = $("#themeSelect").val();
        if (verse.trim() !== "") {
            if (theme === "upbeat") {
                $("#output").append("<p>" + verse + "</p>");
            } else if (theme === "melancholy") {
                $("#output").prepend("<p>" + verse + "</p>");
            }
            $("#verseInput").val("");
        }
    });

    $("#generateBtn").click(function() {
        const theme = $("#themeSelect").val();
        let verses = [];
        if (theme === "upbeat") {
            verses = upbeatVerses;
        } else if (theme === "melancholy") {
            verses = melancholyVerses;
        }
        $("#output").empty();
        for (let i = 0; i < verses.length; i++) {
            $("#output").append("<p>" + verses[i] + "</p>");
        }
    });
});