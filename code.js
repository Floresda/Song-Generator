$(document).ready(function() {
 
    $("#insertVerseBtn").click(function() {
        const verse = $("#verseInput").val();
        const theme = $("#themeSelect").val();
        if (verse.trim() !== "") {
            if (theme === "upbeat") {
                $("<p>").text(verse).appendTo("#output");
            } else if (theme === "melancholy") {
                $("<p>").text(verse).prependTo("#output");
            }
            $("#verseInput").val("");
        }
    });


    $("#generateBtn").click(function() {
        const theme = $("#themeSelect").val();
        let verses = [];
        if (theme === "upbeat") {
            verses = ["I'm feeling so alive", "Sunshine fills the air", "Dancing through the night"];
        } else if (theme === "melancholy") {
            verses = ["Tears fall like rain", "Loneliness fills the void", "Echoes of a broken heart"];
        }
        $("#output").empty();
        for (let i = 0; i < verses.length; i++) {
            $("<p>").text(verses[i]).appendTo("#output");
        }
    });

    $("#insertBeforeBtn").click(function() {
        const verse = $("#verseInput").val();
        const theme = $("#themeSelect").val();
        if (verse.trim() !== "") {
            if (theme === "upbeat") {
                $("<p>").text(verse).insertBefore("#output");
            } else if (theme === "melancholy") {
                $("<p>").text(verse).insertAfter("#output");
            }
            $("#verseInput").val("");
        }
    });

    $("#insertAfterBtn").click(function() {
        const verse = $("#verseInput").val();
        const theme = $("#themeSelect").val();
        if (verse.trim() !== "") {
            if (theme === "upbeat") {
                $("<p>").text(verse).insertAfter("#output");
            } else if (theme === "melancholy") {
                $("<p>").text(verse).insertBefore("#output");
            }
            $("#verseInput").val("");
        }
    });
});