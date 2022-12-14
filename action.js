//initial number of cookies    
var num = 0;
thumbtacks = 0;
dartcost = 100;
needlecost = 200;
needletotal = 0;
pops = 0;
nerfcost = 1000;
nerftotal = 0;
dartguncost = 2000;
darttotal = 0;
chaincost = 5000;
chaintotal = 0;


//initalize audio array
let audioIndex = 0
var audio = new Array(40);
for (var i = 0; i < audio.length; i++) {
    audio[i] = new Audio("bloonsfx.mp3");
}

function PlayAudio() {
    audio[audioIndex].play();
    audioIndex++;
    if (audioIndex > audio.length - 1) {
        audioIndex = 0;
    }
}

//var cookie = document.getElementById("cookie");
function cookieClick(click) {
    num += click;
    PlayAudio()
    whiteclick()
    var numbers = document.getElementById("numbers");
    //upgrade level for printing
    numbers.innerHTML = num;

}
setInterval(checkpps, 5000);

function checkthumb() {
    if (num >= dartcost) {
        num = num - dartcost - 1
        dartcost = Math.round(dartcost * 1.10)
        document.getElementById("tcost").innerHTML = dartcost
        console.log(dartcost)

        thumbtacks += 1
        console.log(dartcost)
        thumbtack()
    } else {
        return null
    }
}

function thumbtack() {
    cookieClick(1)
    setTimeout(thumbtack, 1000);
}


function checkneedle() {
    if (num >= needlecost) {
        num = num - needlecost - 5
        needlecost = Math.round(needlecost * 1.10)
        document.getElementById("ncost").innerHTML = needlecost
        console.log(needlecost)

        needletotal += 1
        needle()
    } else {
        return null
    }
}

function needle() {
    cookieClick(5)
    setTimeout(needle, 1000);
}

function checknerf() {
    if (num >= nerfcost) {
        num = num - nerfcost - 20
        nerfcost = Math.round(nerfcost * 1.10)
        document.getElementById("necost").innerHTML = nerfcost
        console.log(nerfcost)

        nerftotal += 1
        nerf()
    } else {
        return null
    }
}

function nerf() {
    cookieClick(20)
    setTimeout(nerf, 1000);
}

function checkdart() {
    if (num >= dartguncost) {
        num = num - dartguncost - 60
        dartguncost = Math.round(dartguncost * 1.10)
        document.getElementById("dcost").innerHTML = dartguncost
        console.log(dartguncost)
        darttotal += 1
        dart()
    } else {
        return null
    }
}

function dart() {
    cookieClick(60)
    setTimeout(dart, 1000);
}

function checkchain() {
    if (num >= chaincost) {
        num = num - chaincost - 100
        chaincost = Math.round(chaincost * 1.10)
        document.getElementById("ccost").innerHTML = chaincost
        console.log(chaincost)
        chaintotal += 1
        chain()
    } else {
        return null
    }
}

function chain() {
    cookieClick(100)
    setTimeout(chain, 1000);
}

function whiteclick() {
    document.querySelector('.imgs').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.imgs').style.opacity = '1';
    }, 100);
    
}
