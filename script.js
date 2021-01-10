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