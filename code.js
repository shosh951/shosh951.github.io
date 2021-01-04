var answers = [
    {
        "questionNum": "1",
        "0":"איך אומרים?",
        "1":"לנסוע",
        "2":"ליסוע",
        "3":"גם וגם",
        "correctAns":"1"
    },
    {
        "questionNum": "2",
        "0":"איך אומרים?",
        "1":"מזרון",
        "2":"מזרן",
        "3":"גם וגם",
        "correctAns":"2"
    },
    {
        "questionNum": "3",
        "0":"איך אומרים?",
        "1":"שיקר לי",
        "2":"שיקר אותו",
        "3":"גם וגם",
        "correctAns":"1"
    },
    {
        "questionNum": "4",
        "0":"אדם גלוי וישר הוא אדם...",
        "1":"כן",
        "2":"כנה",
        "3":"גם וגם",
        "correctAns":"1"
    },
    {
        "questionNum": "5",
        "0":"איך אומרים?",
        "1":"הכיר תודה",
        "2":"הוקיר תודה",
        "3":"גם וגם",
        "correctAns":"1"
    },
    {
        "questionNum": "6",
        "0":"איך אומרים?- אח (תנור)",
        "1":"בוער",
        "2":"בוערת",
        "3":"גם וגם",
        "correctAns":"1"
    },
    {
        "questionNum": "7",
        "0":"איך אומרים?",
        "1":"סכין חד",
        "2":"סכין חדה",
        "3":"גם וגם",
        "correctAns":"3"
    },
    {
        "questionNum": "8",
        "0":"איך אומרים?",
        "1":"להכין לביבות",
        "2":"ללבב לביבות",
        "3":"גם וגם",
        "correctAns":"2"
    },
    {
        "questionNum": "9",
        "0":"איך אומרים?",
        "1":"פנים יפים",
        "2":"פנים יפות",
        "3":"גם וגם",
        "correctAns":"3"
    },
    {
        "questionNum": "10",
        "0":"בשבילי אתה מספר...",
        "1":"אחד",
        "2":"אחת",
        "3":"גם וגם",
        "correctAns":"2"
    },
    {
        "questionNum": "11",
        "0":" האם ״גרב״ זה בזכר או בנקבה?",
        "1":"נקבה",
        "2":"זכר",
        "3":"גם וגם",
        "correctAns":"2"
    },
    {
        "questionNum": "12",
        "0":"מהי צורת הרבים של המילה ״רכב״?",
        "1":"רכבים",
        "2":"כלי רכב",
        "3":"גם וגם",
        "correctAns":"2"
    },
    {
        "questionNum": "13",
        "0":"מה פירוש המילה עלילון?",
        "1":"עלון מידע",
        "2":"סיפור קצר",
        "3":"קומיקס",
        "correctAns":"3"
    },
    {
        "questionNum": "14",
        "0":"אם אני רוצה לקחת ספר בהשאלה, אז אני...",
        "1":"משאיל ספר",
        "2":"שואל ספר",
        "3":"גם וגם",
        "correctAns":"2"
    },
    {
        "questionNum": "15",
        "0":"איך אומרים?",
        "1":"לא ייאמן",
        "2":"לא יאומן",
        "3":"גם וגם",
        "correctAns":"1"
    },
    {
        "questionNum": "16",
        "0":"כשאני במטוס, אני...",
        "1":"מוטס",
        "2":"מוסק",
        "3":"מועף",
        "correctAns":"1"
    },
    {
        "questionNum": "17",
        "0":"איזה שם צבע הוא מהעברית החדשה?",
        "1":"כחול",
        "2":"אדום",
        "3":"כתום",
        "correctAns":"3"
    },
    {
        "questionNum": "18",
        "0":"מהי החלופה העברית למילה carpool?",
        "1":"נסיעה משותפת",
        "2":"צוותאית",
        "3":"גבתון",
        "correctAns":"2"
    },
    {
        "questionNum": "19",
        "0":"מה פירוש המילה ״פוזמק״?",
        "1":"מרפסת",
        "2":"פונדק",
        "3":"גרב",
        "correctAns":"3"
    },
    {
        "questionNum": "20",
        "0":"איך אומרים?",
        "1":"היכנסו",
        "2":"כנסו",
        "3":"גם וגם",
        "correctAns":"1"
    }
 ];
var nCurrentQuestion;
var POINTS = 5;
var nScore;
var strBtnColor;
var nClickCounter;
$(function() {
    init();   
});

function init() {
    nCurrentQuestion = 0;
    nClickCounter = 0;
    nScore = 0;
    $(".score").html("הציון שלי : " + nScore);
    strBtnColor = "";
    $(".end-part").hide();
    $("#title").css({
        "width": "50vw",
        "height": "10vh"
    });
    $("#quiz-name").css({
        "width": "30vw",
        "height": "8vh"
    });
    $(".welcome-text").show();
    animation();
}

function progressBar() {
    $("#progress-bar").show();
    $(".ans").off("click");
    $(".ans").off("tap");
    $("#progress-bar").html('<span class="dot" id = "dot0"></span>');
    for(var i = 1; i < 20; i++) {
        $("#progress-bar").append('<span class="dot" id = "dot' + i + '"></span>');
    }
}

function animation() {
    $("#title").animate({
        "width": "30vw",
        "height": "8vh"
    }, 1500);
    $("#quiz-name").animate({
        "width": "62vw",
        "height": "18vh"
    }, 1500);
    setTimeout(function(){
        $("#welcome-button").on("click",addInstructions);
        $("#welcome-button").on("tap",addInstructions);
        $("#welcome-button").show();
    },1500);
}

function addInstructions() {

    $(".welcome-text").hide();
    $("#welcome-button").hide();
    $(".instructions").show();
    $("#start-button").on("click", function() {
        $("#info-icon").show();
        $("#info-icon").on("click", function() {
            nClickCounter++;
            if (nClickCounter === 1){
                $("#info-text").show(); 
            }
            else {
                $("#info-text").hide();
                nClickCounter = 0;
            }
        });
        progressBar();
        changeInfo();
    });
}

function changeInfo() {
    $(".instructions").hide();
    $(".questions-part").show();
    $(".score").show();
    $("#question").text(answers[nCurrentQuestion]["0"]);
    $("#answer1").text(answers[nCurrentQuestion]["1"]);
    $("#answer2").text(answers[nCurrentQuestion]["2"]);
    $("#answer3").text(answers[nCurrentQuestion]["3"]);

    $(".ans").on("click", checkAnswer);
    $(".ans").on("tap", checkAnswer);

}

function checkAnswer(event) {
    $(".ans").off("click");
    $(".ans").on("tap");

    // if the text of the chosen button equal click the answer
    if($(event.target).attr("id").charAt(6) !== answers[nCurrentQuestion].correctAns) {
        $(event.target).addClass("wrong-ans");
        setTimeout(function (){
            $("#answer" + answers[nCurrentQuestion].correctAns).addClass("correct-ans");
        },350);
        strBtnColor = "rgb(188,92,66)";
    }
    else {
        nScore += POINTS;
        $(".score").html("הציון שלי : " + nScore);
        $("#answer" + answers[nCurrentQuestion].correctAns).addClass("correct-ans");
        strBtnColor = "rgb(83,165,85)";
    }
    
    setTimeout(function(){
            nCurrentQuestion++;
            if(nCurrentQuestion > 19) {
                $("#dot" + (nCurrentQuestion -1) + "").css("backgroundColor", strBtnColor);
                setTimeout(function() {
                    $(event.target).removeClass("wrong-ans");
                    $("#answer" + answers[nCurrentQuestion-1].correctAns).removeClass("correct-ans");
                    endGame();
                },1000);
            }
            else {
                $("#dot" + (nCurrentQuestion - 1) + "").css("backgroundColor", strBtnColor);
                $(event.target).removeClass("wrong-ans");
                $("#answer" + answers[nCurrentQuestion-1].correctAns).removeClass("correct-ans");
                changeInfo();
            }
        }, 1500);
}

function endGame() {
    $(".questions-part").hide();
    $(".score").hide();
    $("#progress-bar").hide();
    $("#info-icon").hide();
    if (nScore <= 60) {
        $("#conclusion").text("לא רע, אבל אני בטוח שבפעם הבאה תצליחו יותר!");
    }
    else if (nScore <= 100 && nScore >= 61){
        $("#conclusion").text("אתם תותחי עברית אמיתיים ואני ממש גאה בכם! רוצים לנסות פעם נוספת?");
        $("#conclusion").addClass("end-conclusion-good");
    }
    $("#score-p").text(" הגעתם לסוף החידון וצברתם " + nScore + "/100 נקודות");
    $(".end-part").show();
    $("#restart-btn").on("click", init);
}