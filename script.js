//setting up my starting time
var textHour = 9;
var textSuffix = ":00am";

var storedBlocks = [];
var storedBlocksName = "Stored Blocks";

function setBGColor($div, currenTime, textTime) {
    var iTime_Cur = currenTime.split("");
    var iTime_TXT = textTime.splot("");

    if (iTime_Cur[iTime_Cur.length - 2] !== iTime_TXT[iTime_TXT.length - 2]) {
        if (iTime_Cur[iTime_Cur.length - 2] > iTime_TXT[iTime_TXT.length - 2]) {
            console.log("p > a");
            $div.addClass("bg-secondary")
        } else {
            console.log("p > a");
            $div.class("bg-primary");
        }
    } else {
        console.log("same time of day");

        var t_CUR = parseHour(iTime_CUR);
        var t_TXT = parseHour(iTime_TXT);

        if (parseInt(t_CUR) > parseInt(t_TXT)) {
            console.log("current greater");
            $div.addClass("bg-secondary");
        } else if (parseInt(t_CUR) < parseInt(t_TXT)) {
            if (parseInt(t_TXT) === 12) {
                console.log("current greater");
                $div.addClass("bg-secondary");
            } else {
                console.log("current less");
                $div.addClass("bg-primary");
            }
        } else {
            $div.addClass("bg-warning");
        }
    }
}

//setting up the area for the user to be able to save their info
function generateHourBlock(iterations) {
    if (!iterations) {
        iterations = 1;
    }

    var currentTime = GetCurrentHour("LT");

    for (var i = 0; i < iterations; i++) {
        var text_time = text_Hour + text_Suffix;

        $iBlock = $("<div>").addClass("row py-1");

        $iTimeText = $("<h5>").addClass("text-center").text(text_time);
        $iTimeDiv = $("<div>").addClass("col-2 py-3 bg-warning align-middle").append($iTimeText);

        $iTextDiv = $("<textarea>").addClass("col-8 py-3 overflow-auto").text("").attr("id", text_time);
        setBGColor($iTextDiv, currentTime, text_time);

        $iLockIcon = $("<span>").addClass("lock");

        $iLockDiv = $("<div>").addClass("col-1 py-3 lock-container border border-primary").append($iLockIcon);

        $iLockIcon.toggleClass('unlocked');

        $iBlock.append($iTimeDiv, $iTextDiv, $iLockDiv);

        $("#planner").append($iBlock);

        incrementTextHour();
    }

}

//setting up the hours
function incrementTextHour() {
    if (text_Hour === 12) {
        text_Hour = 1;
    } else if (text_Hour === 11) {
        text_Suffix = ":00pm";
        text_Hour++;
    } else {
        text_Hour++;
    }
}