const leftarrow = document.getElementById("left-arrow-navigation");
const rightarrow = document.getElementById("right-arrow-navigation");
const text = document.getElementById("function-text");
const image = document.getElementById("function-image");
let x = document.cookie;
var arraycheck = document.cookie.split("=");
var numbercheck = arraycheck[1];
if(isNaN(numbercheck)){
document.cookie = "functionlist=0";
}
var array = document.cookie.split("=");
var number = array[1];
console.log(document.cookie);
function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}
console.log(getCookie("functionlist"))
pageChange(number);
function leftScroll() {
    var array = document.cookie.split("=");
    var number = array[1];
    console.log(array)
    var page = parseInt(number) - 1;
    if(number < 1){
        var page = "4";
    }
    pageChange(page)
    console.log(page)
    document.cookie = "functionlist=" + page;
}
function rightScroll() {
    var array = document.cookie.split("=");
    var number = getCookie("functionlist");
    console.log(number)
    var page = parseInt(number) + 1;
    if(number >= 4){
        var page = "0";
    }
    pageChange(page)
    console.log(page)
    document.cookie = "functionlist=" + page;
}
function pageChange(change){
    document.cookie = "functionlist=" + change;
    console.log(change)
    let a = change
    if(change == 0){
        text.innerHTML = "<h2>Join Messages</h2><p>You can set message that will be sent on selected channel every time when someone joins your Discord Server!</p>";
        image.innerHTML = '<img src="Img/joinmsg-function.png">';
    }else if(change == 1){
       text.innerHTML = "<h2>Auto Role</h2><p>You can select role that will be given to every user that joins your Discord Server.</p>";
       image.innerHTML = '<img src="Img/autorole-function.png">';
    }else if(change == 2){
        text.innerHTML = "<h2>Message Logs</h2><p>In Logs channel bot will inform you every time when someone deletes or edits message.</p>";
        image.innerHTML = '<img src="Img/logs-function.png">';
    }else if(change == 3){
        text.innerHTML = "<h2>Blocking Links</h2><p>If you enable Blocking Links feature bot will remove every message containing Discord Server invite.</p>";
        image.innerHTML = '<img src="Img/bl-function.png">';
    }else if(change == 4){
        text.innerHTML = "<h2>Timer</h2><p>With timer command you can set timer for selected time. It will ping you at the end so you won't lose track of time.</p>";
        image.innerHTML = '<img src="Img/timer-function.png">';
    }
    return;
}
var page = parseInt(number) + 1;
setInterval(rightScroll, 5000);