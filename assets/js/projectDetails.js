var myName = 'PROJECTS WORKING';
var myArray = myName.split("");
var loopTimer;
function frameLooper() {
    if(myArray.length > 0) {
        document.getElementById("type_project").innerHTML += myArray.shift();
    }else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('frameLooper()',10);
}
for(var i = 0; i < 100; i++) {
    frameLooper();
}
    