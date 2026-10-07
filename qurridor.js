var resign = document.getElementById("resign");
var del = document.getElementById("button");
var title = document.getElementById("title");
var rules = document.getElementById("rules");
var ff = document.getElementById("ff");
var games = document.getElementById("s");
var scorea = document.getElementById("scorea");
var scoreb = document.getElementById("scoreb");
var shop = document.getElementById("store")
var pa = document.getElementById("1000")
var pb = document.getElementById("1001")
var pc = document.getElementById("1002")
var pd = document.getElementById("1003")
var pe = document.getElementById("1004")
var pf = document.getElementById("1005")
var vsod = document.getElementById("vso")
var ogskin = document.getElementsByClassName("playera")
var settingsBtn = document.getElementById("settingsBtn");
var settings = document.getElementById("settings");
const WALL_H = "<button class='wallsbi' style='width:56px;height:20px'> </button>";
const WALL_V = "<button class='wallsbh' style='width:20px;height:56px'> </button>";
const WALL_H_MID_MARKER = "<button class='wallsbhx' style='width:20px;height:20px'> </button>";
const WALL_V_MID_MARKER = "<button class='wallsbh' style='width:20px;height:20px'> </button>";
const WALL_EMPTY_SLOT = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
var drawgame = 1
var hank = 0
var ee = 0
var vso = 1000;
var skins = 0
var arrrows = 9
var tor = 0
var idnum = 0;
var idsp = 8
var sidsp = 152
var ti;
var walls = 9
var wallsb = 9
var wina = 0
var winb = 0
var skinss = 0
var unlock1 = false
var unlock2 = false
var unlock3 = false
var unlock4 = false
var unlock5 = false
var arrrows = 17
var allow = 1
var wc;
var wcb;
var col = 0
var row = 0
var mc = new Array(17)
var mcb = new Array(17)
var arr = new Array(arrrows)
var i, s;
var arrwf = new Array(1)
var mcr = new Array(17)
var arrwb = new Array(1)
var tidnum = 8;
var best = -1;
var Firstmax = Infinity
var Secondmax
var Firstsmax = Infinity
var Secondsmax
vsod.innerHTML = "vso:" + vso
BuildGame()
games.style.display = "none"
function game() {
    allow = 1
    if (del.classList == "wce") {
        del.style.display = "none"
    }
    else {
        vsod.innerHTML = "vso:" + vso
        scorea.innerHTML = wina
        scoreb.innerHTML = winb
        document.getElementById("resign").style.display = "block"
        games.classList = "game"
        games.style.display = "block"
        scorea.style.display = "block"
        scoreb.style.display = "block"
        scorea.classList = "scorea"
        scoreb.classList = "scoreb"
        shop.style.display = "none"
        ff.style.display = "none"
        pa.style.display = "none"
        pb.style.display = "none"
        pc.style.display = "none"
        pd.style.display = "none"
        pe.style.display = "none"
        pf.style.display = "none"
        title.style.display = "none"
        settingsBtn.style.display = "none"
        settings.style.display = "none"
        rules.classList = "bmm"
        rules.style.display = "block"
        rules.innerHTML = ""
        if (del.style.display == "block") {
            BuildGame()
        }
        if (del.style.display != "none") {
            del.style.display = "none"
        }
        var text = "";
        for (i = 0; i < arrrows; i++) {
            if (i % 2 == 0) {
                for (s = 0; s < arr[i].length; s++) {
                    text += arr[i][s]
                }
            }
            else {
                for (s = 0; s < arr[i].length; s++) {
                    text += arr[i][s]
                }
            }
            text += "</br> "
        }
        games.innerHTML = text
        text = "";
        for (i = 0; i < 10; i++) {
            text += arrwf[i]
        }
        document.getElementById("tilea").innerHTML = text
        text = "";
        for (i = 0; i < 10; i++) {
            text += arrwb[i]
        }
        document.getElementById("tileb").innerHTML = text
        document.getElementById("tilea").style.display = "block"
        document.getElementById("tileb").style.display = "block"
    }
}

function move(p) {
    if (allow == 1) {
        idnum = p.id
        var idc = (p.id)
        var sp = idc % 18;
        var fp = (Math.floor(idc / 18)) * 2
        var psp;
        var pfp;
        if (tor % 2 == 1) {
            psp = idsp % 18
            pfp = (Math.floor(idsp / 18)) * 2
            if (psp == sp - 2 && pfp == fp - 2 &&
                ((arr[pfp + 1][psp] != WALL_H && (pfp == 14 || arr[pfp + 3][psp] == WALL_H) && arr[pfp + 2][psp + 1] != WALL_V && arr[fp][sp - 2] == P1_TILE())
                    || (arr[pfp][psp + 1] != WALL_V && (psp == 14 || arr[pfp][psp + 3] == WALL_V) && arr[pfp + 1][psp + 2] != WALL_H && arr[fp - 2][sp] == P1_TILE()))) {//p2 right one down one

                idnum = Number(idnum) - 20
                arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                if (fp == 16) {
                    resign.style.display = "none"
                    winb++
                    rules.style.display = "none"
                    del.innerHTML = "you lost! <br /> <br /> click to play again"
                    del.style.display = "block"
                    del.classList = "win"
                    allow = 0
                    arr[fp][sp] = tidsp
                }

            }
            if (psp == sp + 2 && pfp == fp - 2 &&
                ((arr[pfp + 1][psp] != WALL_H && (pfp == 14 || arr[pfp + 3][psp] == WALL_H) && arr[pfp + 2][psp - 1] != WALL_V && arr[fp][sp + 2] == P1_TILE())
                    || (arr[pfp][psp - 1] != WALL_V && (psp == 2 || arr[pfp][psp - 3] == WALL_V) && arr[pfp + 1][psp - 2] != WALL_H && arr[fp - 2][sp] == P1_TILE()))) {//p2 left one down one
                idnum = Number(idnum) - 16
                arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                if (fp == 16) {
                    resign.style.display = "none"
                    winb++
                    rules.style.display = "none"
                    del.innerHTML = "you lost! <br /> <br /> click to play again"
                    del.style.display = "block"
                    del.classList = "win"
                    allow = 0
                    arr[fp][sp] = tidsp
                }
            }

            if (psp == sp + 2 && pfp == fp + 2 &&
                ((arr[pfp - 1][psp] != WALL_H && (pfp == 2 || arr[pfp - 3][psp] == WALL_H) && arr[pfp - 2][psp - 1] != WALL_V && arr[fp][sp + 2] == P1_TILE())
                    || (arr[pfp][psp - 1] != WALL_V && (psp == 2 || arr[pfp][psp - 3] == WALL_V) && arr[pfp - 1][psp - 2] != WALL_H && arr[fp + 2][sp] == P1_TILE()))) {//p2 left one up one
                idnum = Number(idnum) + 20
                arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"

            }
            if (psp == sp - 2 && pfp == fp + 2 &&
                ((arr[pfp - 1][psp] != WALL_H && (pfp == 2 || arr[pfp - 3][psp] == WALL_H) && arr[pfp - 2][psp + 1] != WALL_V && arr[fp][sp - 2] == P1_TILE())
                    || (arr[pfp][psp + 1] != WALL_V && (psp == 14 || arr[pfp][psp + 3] == WALL_V) && arr[pfp - 1][psp + 2] != WALL_H && arr[fp + 2][sp] == P1_TILE()))) {//p2 right one up one
                idnum = Number(idnum) + 16
                arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
            }
            if (psp == sp && pfp == fp - 4 && arr[pfp + 1][psp] != WALL_H && arr[pfp + 3][psp] != WALL_H) {//p2 down two
                if (arr[fp - 2][sp] == P1_TILE()) {
                    idnum = Number(idnum) - 36
                    arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                    tidsp = arr[pfp][psp]
                    arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                    arr[fp][sp] = tidsp
                    idsp = idc
                    tor++
                    arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                    if (fp == 16) {
                        resign.style.display = "none"
                        winb++
                        rules.style.display = "none"
                        del.innerHTML = "you lost! <br /> <br /> click to play again"
                        del.style.display = "block"
                        del.classList = "win"
                        allow = 0
                        arr[fp][sp] = tidsp
                    }
                }
            }
            if (psp == sp && pfp == fp + 4 && arr[pfp - 1][psp] != WALL_H && arr[pfp - 3][psp] != WALL_H) {
                if (arr[fp + 2][sp] == P1_TILE()) {//p2 up two
                    idnum = Number(idnum) + 36
                    arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                    arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                    tidsp = arr[pfp][psp]
                    arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                    arr[fp][sp] = tidsp
                    idsp = idc
                    tor++
                }
            }
            if (psp == sp + 4 && pfp == fp && arr[pfp][psp - 1] != WALL_V && arr[pfp][psp - 3] != WALL_V) {
                if (arr[fp][sp + 2] == P1_TILE()) {//p2 left two
                    idnum = Number(idnum) + 4
                    tidsp = arr[pfp][psp]
                    arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                    arr[fp][sp] = tidsp
                    idsp = idc
                    arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                    arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                    tor++
                }
            }
            if (psp == sp - 4 && pfp == fp && arr[pfp][psp + 1] != WALL_V && arr[pfp][psp + 3] != WALL_V) {
                if (arr[fp][sp - 2] == P1_TILE()) {//p2 right two
                    idnum = Number(idnum) - 4
                    tidsp = arr[pfp][psp]
                    arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                    arr[fp][sp] = tidsp
                    idsp = idc
                    tor++
                    arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                    arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                }
            }
            if (psp == sp && pfp == fp - 2 && arr[pfp + 1][psp] != WALL_H) {//p2 down one
                arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                idnum = Number(idnum) - 18
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                idnum = Number(idnum) - 4
                tor++
                if (fp == 16) {
                    winb++
                    rules.style.display = "none"
                    resign.style.display = "none"
                    del.innerHTML = "you lost! <br /> <br /> click to play again"
                    del.style.display = "block"
                    del.classList = "win"
                    allow = 0
                    arr[fp][sp] = tidsp
                }
            }
            if (psp == sp && pfp == fp + 2 && arr[pfp - 1][psp] != WALL_H) {//p2 up one
                idnum = Number(idnum) + 18
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"

            }
            if (psp == sp + 2 && pfp == fp && arr[pfp][psp - 1] != WALL_V) {//p2 left one
                idnum = Number(idnum) + 2
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
            }
            if (psp == sp - 2 && pfp == fp && arr[pfp][psp + 1] != WALL_V) {//p2 right one 
                arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                idnum = Number(idnum) - 2
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
            }
        }
        else {
            psp = sidsp % 18
            pfp = (Math.floor(sidsp / 18)) * 2
            if (psp == sp - 2 && pfp == fp - 2 &&
                ((arr[pfp + 1][psp] != WALL_H && (pfp == 14 || arr[pfp + 3][psp] == WALL_H) && arr[pfp + 2][psp + 1] != WALL_V && arr[fp][sp - 2] == P2_TILE())
                    || (arr[pfp][psp + 1] != WALL_V && (psp == 14 || arr[pfp][psp + 3] == WALL_V) && arr[pfp + 1][psp + 2] != WALL_H && arr[fp - 2][sp] == P2_TILE()))) {//p1 right one down one
                idnum = Number(idnum) - 20
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"

            }
            if (psp == sp + 2 && pfp == fp - 2 &&
                ((arr[pfp + 1][psp] != WALL_H && (pfp == 14 || arr[pfp + 3][psp] == WALL_H) && arr[pfp + 2][psp - 1] != WALL_V && arr[fp][sp + 2] == P2_TILE())
                    || (arr[pfp][psp - 1] != WALL_V && (psp == 2 || arr[pfp][psp - 3] == WALL_V) && arr[pfp + 1][psp - 2] != WALL_H && arr[fp - 2][sp] == P2_TILE()))) {//p1 left one down one
                idnum = Number(idnum) - 16
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
            }
            if (psp == sp + 2 && pfp == fp + 2 &&
                ((arr[pfp - 1][psp] != WALL_H && (pfp == 2 || arr[pfp - 3][psp] == WALL_H) && arr[pfp - 2][psp - 1] != WALL_V && arr[fp][sp + 2] == P2_TILE())
                    || (arr[pfp][psp - 1] != WALL_V && (psp == 2 || arr[pfp][psp - 3] == WALL_V) && arr[pfp - 1][psp - 2] != WALL_H && arr[fp + 2][sp] == P2_TILE()))) {//p1 left one up one
                idnum = Number(idnum) + 20
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                if (fp == 0) {
                    vso += 100
                    rules.style.display = "none"
                    resign.style.display = "none"
                    wina++
                    del.innerHTML = "you win! <br /> <br /> click to play again"
                    del.style.display = "block"
                    del.classList = "win"
                    allow = 0
                    arr[fp][sp] = tidsp
                }
            }
            if ((psp == sp - 2 && pfp == fp + 2) &&
                ((arr[pfp][psp + 1] != WALL_V && (psp == 14 || arr[pfp][psp + 3] == WALL_V) && arr[pfp - 1][psp + 2] != WALL_H && arr[fp + 2][sp] == P2_TILE())
                    || (arr[pfp - 1][psp] != WALL_H && (pfp == 2 || arr[pfp - 3][psp] == WALL_H) && arr[pfp - 2][psp + 1] != WALL_V && arr[fp][sp - 2] == P2_TILE()))) {//p1 right one up one
                idnum = Number(idnum) + 16
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                if (fp == 0) {
                    vso += 100
                    rules.style.display = "none"
                    resign.style.display = "none"
                    wina++
                    del.innerHTML = "you win! <br /> <br /> click to play again"
                    del.style.display = "block"
                    del.classList = "win"
                    allow = 0
                    arr[fp][sp] = tidsp
                }
            }
            if (psp == sp && pfp == fp - 4 && arr[pfp + 1][psp] != WALL_H && arr[pfp + 3][psp] != WALL_H) {//p1 down two
                if (arr[fp - 2][sp] == P2_TILE()) {
                    idnum = Number(idnum) - 36
                    arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                    arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                    tidsp = arr[pfp][psp]
                    arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                    arr[fp][sp] = tidsp
                    sidsp = idc
                    tor++
                }
            }
            if (psp == sp && pfp == fp + 4 && arr[pfp - 1][psp] != WALL_H && arr[pfp - 3][psp] != WALL_H) {//p1 up two
                if (arr[fp + 2][sp] == P2_TILE()) {
                    idnum = Number(idnum) + 36
                    tidsp = arr[pfp][psp]
                    arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                    arr[fp][sp] = tidsp
                    sidsp = idc
                    tor++
                    arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                    arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                    if (fp == 0) {
                        vso += 100
                        rules.style.display = "none"
                        resign.style.display = "none"
                        wina++
                        del.innerHTML = "you win! <br /> <br /> click to play again"
                        del.style.display = "block"
                        del.classList = "win"
                        allow = 0
                    }
                }
            }
            if (psp == sp + 4 && pfp == fp && arr[pfp][psp - 1] != WALL_V && arr[pfp][psp - 3] != WALL_V) {//p1 left two
                if (arr[fp][sp + 2] == P2_TILE()) {
                    arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                    idnum = Number(idnum) + 4
                    tidsp = arr[pfp][psp]
                    arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                    arr[fp][sp] = tidsp
                    sidsp = idc
                    tor++
                    arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                }
            }
            if (psp == sp - 4 && pfp == fp && arr[pfp][psp + 1] != WALL_V && arr[pfp][psp + 3] != WALL_V) {//p1 right two
                if (arr[fp][sp - 2] == P2_TILE()) {
                    arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                    idnum = Number(idnum) - 4
                    tidsp = arr[pfp][psp]
                    arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                    arr[fp][sp] = tidsp
                    sidsp = idc
                    tor++
                    arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                }
            }
            if (psp == sp && pfp == fp - 2 && arr[pfp + 1][psp] != WALL_H) { //p1 down one
                idnum = Number(idnum) - 18
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
            }
            if (psp == sp && pfp == fp + 2 && arr[pfp - 1][psp] != WALL_H) { //p1 up one
                idnum = Number(idnum) + 18
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                if (fp == 0) {
                    wina++
                    rules.style.display = "none"
                    resign.style.display = "none"
                    vso += 100
                    del.innerHTML = "you win! <br /> <br /> click to play again"
                    del.style.display = "block"
                    del.classList = "win"
                    allow = 0
                    arr[fp][sp] = tidsp
                }
            }
            if (psp == sp + 2 && pfp == fp && arr[pfp][psp - 1] != WALL_V) {//p1 left one
                idnum = Number(idnum) + 2
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
            }
            if (psp == sp - 2 && pfp == fp && arr[pfp][psp + 1] != WALL_V) {//p1 right one
                idnum = Number(idnum) - 2
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
            }
        }
        runComputerTurn(600)
        var text = "";
        for (i = 0; i < arrrows; i++) {
            for (s = 0; s < arr[i].length; s++) {
                text += arr[i][s]
            }
            text += "</br> "
        }
        games.innerHTML = text
        text = "";
        for (i = 0; i < 10; i++) {
            text += arrwf[i]
        }
        document.getElementById("tilea").innerHTML = text
        text = "";
        for (i = 0; i < 10; i++) {
            text += arrwb[i]
        }
        document.getElementById("tileb").innerHTML = text
    }
}

function wallf(wl) {
    if (allow == 1) {
        var rc = 0
        var ffp
        var fsp
        var sfp
        var ssp
        for (i = 0; i < 17; i++) {
            mc[i] = new Array(17)
            for (s = 0; s < 17; s++) {
                mc[i][s] = arr[i][s]
            }
        }

        hidsp = wl.id
        psp = hidsp % 17
        pfp = (Math.floor(hidsp / 17))
        idnum = wl.id
        if (tor % 2 == 0 && walls > 0) {
            if (mc[pfp][psp + 1] != WALL_V_MID_MARKER && pfp % 2 == 1 && mc[pfp][psp + 2] != WALL_H && psp < 16) {
                mc[pfp][psp] = WALL_H
                mc[pfp][psp + 1] = WALL_H_MID_MARKER
                mc[pfp][psp + 2] = WALL_H
                rc++
            }
            else {
                if (mc[pfp + 1][psp] == WALL_EMPTY_SLOT && pfp % 2 == 0 && mc[pfp + 2][psp] != WALL_V) {
                    mc[pfp][psp] = WALL_V
                    mc[pfp + 1][psp] = WALL_V_MID_MARKER
                    mc[pfp + 2][psp] = WALL_V
                    rc++
                }
            }
            for (i = 0; i < 17; i++) {
                mcr[i] = new Array(17)
                for (s = 0; s < 17; s++) {
                    mcr[i][s] = mc[i][s]
                }
            }
            for (i = 0; i < 17; i++) {
                mcb[i] = new Array(17)
                for (s = 0; s < 17; s++) {
                    mcb[i][s] = mc[i][s]
                }
            }
            ssp = idsp % 18
            sfp = (Math.floor(idsp / 18)) * 2
            fsp = sidsp % 18
            ffp = (Math.floor(sidsp / 18)) * 2
            const ms = new wallchecka(mc)
            const msb = new wallcheckb(mcb)
            ms.traversea(ffp, fsp)
            msb.traverseb(sfp, ssp)

            if (wc == true && wcb == true && rc > 0) {
                for (i = 0; i < 17; i++) {
                    for (s = 0; s < 17; s++) {
                        arr[i][s] = mcr[i][s]
                    }
                }
                arrwf[walls] = ""
                walls--
                arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"

                tor++
                arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
            }
            else {
                del.classList = "wce"
                del.innerHTML = "illegal move"
                del.style.display = "block"
                allow = 0
            }
            runComputerTurn(600)
            var text = "";
            for (i = 0; i < arrrows; i++) {
                for (s = 0; s < arr[i].length; s++) {
                    text += arr[i][s]
                }
                text += "</br> "
            }
            games.innerHTML = text
            text = "";
            for (i = 0; i < 10; i++) {
                text += arrwf[i]
            }
            document.getElementById("tilea").innerHTML = text
            text = "";
            for (i = 0; i < 10; i++) {
                text += arrwb[i]
            }
            document.getElementById("tileb").innerHTML = text
        }
        else {
            if (tor % 2 == 1 && wallsb > 0) {
                if (mc[pfp][psp + 1] != WALL_V_MID_MARKER && pfp % 2 == 1 && mc[pfp][psp + 2] != WALL_H && psp < 16) {
                    mc[pfp][psp] = WALL_H
                    mc[pfp][psp + 1] = WALL_H_MID_MARKER
                    mc[pfp][psp + 2] = WALL_H
                    rc++
                }
                else {
                    if (mc[pfp + 1][psp] == WALL_EMPTY_SLOT && pfp % 2 == 0 && mc[pfp + 2][psp] != WALL_V) {
                        mc[pfp][psp] = WALL_V
                        mc[pfp + 1][psp] = WALL_V_MID_MARKER
                        mc[pfp + 2][psp] = WALL_V

                        rc++
                    }
                }
                for (i = 0; i < 17; i++) {
                    mcr[i] = new Array(17)
                    for (s = 0; s < 17; s++) {
                        mcr[i][s] = mc[i][s]
                    }
                }
                for (i = 0; i < 17; i++) {
                    mcb[i] = new Array(17)
                    for (s = 0; s < 17; s++) {
                        mcb[i][s] = mc[i][s]
                    }
                }
                fsp = sidsp % 18
                ffp = (Math.floor(sidsp / 18)) * 2
                ssp = idsp % 18
                sfp = (Math.floor(idsp / 18)) * 2
                const ms = new wallchecka(mc)
                const msb = new wallcheckb(mcb)
                ms.traversea(ffp, fsp)
                msb.traverseb(sfp, ssp)
                if (wc == true && wcb == true && rc > 0) {
                    for (i = 0; i < 17; i++) {
                        for (s = 0; s < 17; s++) {
                            arr[i][s] = mcr[i][s]
                        }
                    }
                    arrwf[0] = "<div class='texta' style='opacity:30%'> " + p1Name() + ": " + (walls).toString() + " </div>"
                    arrwb[wallsb] = ""
                    wallsb--
                    tor++
                    arrwb[0] = "<div class='textb' style='opacity:100%'> " + p2Name() + ": " + (wallsb).toString() + " </div>"
                }
                else {
                    del.style.display = "block"
                    del.classList = "wce"
                    del.innerHTML = "illegal move"
                    del.style.display = "block"
                    allow = 0
                }
                var text = "";
                for (i = 0; i < arrrows; i++) {
                    for (s = 0; s < arr[i].length; s++) {
                        text += arr[i][s]
                    }
                    text += "</br> "
                }
                games.innerHTML = text
                text = "";
                for (i = 0; i < 10; i++) {
                    text += arrwf[i]
                }
                document.getElementById("tilea").innerHTML = text
                text = "";
                for (i = 0; i < 10; i++) {
                    text += arrwb[i]
                }
                document.getElementById("tileb").innerHTML = text
            }

        }
        for (i = 0; i < 17; i++) {
            mc[i] = new Array(17)
            for (s = 0; s < 17; s++) {
                mc[i][s] = arr[i][s]
            }
        }
    }
}

function BMM() {
    text = ""
    if (rules.classList == "bmm") {
        if (allow == 1) {
            del.style.display = "block"
            del.classList = "sbut"
            del.innerHTML = "start a game:"
            document.getElementById("resign").style.display = "none"
            scorea.style.display = "none"
            scoreb.style.display = "none"
            games.innerHTML = text
            games.style.display = "none"
            rules.classList = "rules"
            title.style.display = "block"
            shop.style.display = "block"
            pa.style.display = "none"
            pb.style.display = "none"
            pc.style.display = "none"
            pd.style.display = "none"
            pe.style.display = "none"
            pf.style.display = "none"
            settingsBtn.style.display = "block"
            title.innerHTML = "tAPY's qurridor, <br /> HAVE FUN!"
            rules.innerHTML = "rules for qurridor:"
            ff.style.display = "block"
            document.getElementById("tileb").innerHTML = text
            document.getElementById("tilea").innerHTML = text
        }
    }
    else {
        del.style.display = "none"
        games.classList = "rulest"
        games.style.display = "block"
        games.innerHTML = "<div id='game'> back to main menu <div />"
        ff.style.display = "none"
        del.innerHTML = "start a game:"
        settingsBtn.style.display = "none"
        settings.style.display = "none"
        rules.classList = "srules"
        rules.innerHTML = "PURPOSE OF THE GAME </br > To be the first to reach the line opposite to ones base line </br > RULES FOR 2 PLAYERS </br > Each player places his pawn in the centre of his base </br >How To Play The Game Quoridor </br >  Each player in turn, chooses to move his pawn or to put up one of his fences. When he has run out of fences, the player must move his pawn. </br > PAWN MOVES </br > The pawns are moved one square at a time, horizontally or vertically, forwards or The pawns must get around the fences </br > fences must be placed between 2 sets of 2 square. The fences can be used to facilitate the players progress or to impede that of the opponent,however, an acess to the goal line must always be left open </br >  When two pawns face each other on neighbouring squares which are not separated by a fence, the player whose turn it is can jump the opponents pawn(and place himself behind him), thus advancing an extra square </br > If there is a fence behind the said pawn, the player can place his pawn to the left or the right of the other pawn </br > END OF GAME </br > The first player who reaches one of the 9 squares opposite his base line is the winner </br > TIME OF GAME </br > From 10 to 20 minutes In a tournament, it possible to allocate a set time to each player"
        title.innerHTML = "rules:"
    }
    if (rules.classList == "srules") {
        ee++
        if (ee == 20) {
            games.classList = "win"
            games.style.display = "block"
            ee = 0
            games.innerHTML = "you found it! <br /> heres 1000 vso"
            vso += 1000
            vsod.innerHTML = "vso:" + vso
            if (unlock4 && unlock3 && unlock2 && unlock1) {
                skinss = 5
                hank = 1
            }
        }
    }
}
function BMM2() {
    if (games.classList != "game") {
        pa.style.display = "none"
        pb.style.display = "none"
        pc.style.display = "none"
        pd.style.display = "none"
        pe.style.display = "none"
        pf.style.display = "none"
        shop.classList = "store"
        games.style.display = "none"
        rules.classList = "rules"
        title.innerHTML = "tAPY's qurridor, <br /> HAVE FUN!"
        rules.innerHTML = "rules for qurridor:"
        ff.style.display = "block"
        del.classList = "sbut"
        del.style.display = "block"
    }
}
function resignF() {
    resign.style.display = "none"
    del.classList = "win"
    del.style.display = "block"
    rules.style.display = "none"
    allow = 0
    if (tor % 2 == 0) {
        winb++
        del.innerHTML = "you lose! <br /> <br /> click to play again"
    }
    else {
        vso += 100
        wina++
        del.innerHTML = "you win! <br /> <br /> click to play again"
    }
}
function store() {
    games.style.display = "none"
    title.innerHTML = "shop:"
    ff.style.display = "none"
    rules.innerHTML = ""
    rules.classList = "bmm"
    del.style.display = "none"
    shop.style.display = "none"
    pa.classList = "s1"
    pb.classList = "s2"
    pc.classList = "s3"
    pd.classList = "s4"
    pe.classList = "s5"
    pa.style.display = "block"
    pb.style.display = "block"
    pc.style.display = "block"
    pd.style.display = "block"
    pe.style.display = "block"
    settingsBtn.style.display = "none"
    settings.style.display = "none"
    if (hank == 1) {
        pf.classList = "s6"
        pf.style.display = "block"
    }
}
var sid = 0
function pawn(skin) {
    tor = 0
    skins = skin.id % 1000
    if (skins == 0) {
        pa.innerHTML = "<div class='eq'> equipped </div> "
        if (sid == 1)
            pb.innerHTML = ""
        if (sid == 2)
            pc.innerHTML = ""
        if (sid == 3)
            pd.innerHTML = ""
        if (sid == 4)
            pe.innerHTML = ""
        if (sid == 5)
            pf.innerHTML = ""
        skinss = 0
        sid = skin.id % 1000
    }
    if (skins == 1) {
        if (vso >= 1000 || unlock1) {
            if (unlock1) {
                vso += 1000
            }
            vso -= 1000
            vsod.innerHTML = "vso:" + vso
            skinss = 1
            unlock1 = true
            pb.innerHTML = "<div class='eq'> equipped </div> "
            pb.style.backgroundImage = "url(pawn.png)"
            if (sid == 0)
                pa.innerHTML = ""
            if (sid == 2)
                pc.innerHTML = ""
            if (sid == 3)
                pd.innerHTML = ""
            if (sid == 4)
                pe.innerHTML = ""
            if (sid == 5)
                pf.innerHTML = ""
            sid = skin.id % 1000
        }
    }
    if (skins == 2) {
        if (vso >= 1000 || unlock2) {
            if (unlock2) {
                vso += 1000
            }
            skinss = 2
            vso -= 1000
            vsod.innerHTML = "vso:" + vso
            unlock2 = true
            if (sid == 0)
                pa.innerHTML = ""
            if (sid == 1)
                pb.innerHTML = ""
            if (sid == 3)
                pd.innerHTML = ""
            if (sid == 4)
                pe.innerHTML = ""
            if (sid == 5)
                pf.innerHTML = ""
            pc.innerHTML = "<div class='eq'> equipped </div>"
            pc.style.backgroundImage = "url(pawna.png)"
            sid = skin.id % 1000
        }
    }
    if (skins == 3) {
        if (vso >= 1000 || unlock3) {
            if (unlock3) {
                vso += 1000
            }
            skinss = 3
            vso -= 1000
            vsod.innerHTML = "vso:" + vso
            unlock3 = true
            if (sid == 0)
                pa.innerHTML = ""
            if (sid == 1)
                pb.innerHTML = ""
            if (sid == 2)
                pc.innerHTML = ""
            if (sid == 4)
                pe.innerHTML = ""
            if (sid == 5)
                pf.innerHTML = ""
            pd.innerHTML = "<div class='eq'> equipped </div> "
            pd.style.backgroundImage = "url(player-pawngreen.jpeg)"
            sid = skin.id % 1000
        }
    }
    if (skins == 4) {
        if (vso >= 1000 || unlock4) {
            if (unlock4) {
                vso += 1000
            }
            skinss = 4
            vso -= 1000
            vsod.innerHTML = "vso:" + vso
            unlock4 = true
            pe.innerHTML = "<div class='eq'> equipped </div> "
            pe.style.backgroundImage = "url(playera-pawn.jpeg)"
            if (sid == 0)
                pa.innerHTML = ""
            if (sid == 1)
                pb.innerHTML = ""
            if (sid == 2)
                pc.innerHTML = ""
            if (sid == 3)
                pd.innerHTML = ""
            if (sid == 5)
                pf.innerHTML = ""
            sid = skin.id % 1000
        }
    }
    if (skins == 5) {
        if (vso >= 1000 || unlock5) {
            skinss = 5
            vsod.innerHTML = "vso:" + vso
            unlock5 = true
            pf.innerHTML = "<div class='eq'> equipped </div> "
            pf.style.backgroundImage = "url(eeskin.jepg.webp)"
            if (sid == 0)
                pa.innerHTML = ""
            if (sid == 1)
                pb.innerHTML = ""
            if (sid == 2)
                pc.innerHTML = ""
            if (sid == 3)
                pd.innerHTML = ""
            if (sid == 4)
                pe.innerHTML = ""
            sid = skin.id % 1000
        }
    }
    drawgame = 0
}

function wallchecka(maze) {
    wc = false
    this.maze = maze
    this.traversea = function (row, col) {
        this.maze[row][col] = 'v'

        if (row == 0) {
            wc = true
        }
        else {
            if (row > 0 && this.maze[row - 1][col] != WALL_H && this.maze[row - 2][col] != 'v')
                this.traversea(row - 2, col)
            if (col > 0 && this.maze[row][col - 1] != WALL_V && this.maze[row][col - 2] != 'v')
                this.traversea(row, col - 2)
            if (col < 16 && this.maze[row][col + 1] != WALL_V && this.maze[row][col + 2] != 'v')
                this.traversea(row, col + 2)
            if (row < 16 && this.maze[row + 1][col] != WALL_H && this.maze[row + 2][col] != 'v')
                this.traversea(row + 2, col)
        }
        if (wc != true)
            wc = false
    }
}
function wallcheckb(maze) {
    wcb = false
    this.maze = maze
    this.traverseb = function (row, col) {

        this.maze[row][col] = 'v'
        if (row == 16) {
            wcb = true
        }
        else {
            if (row < 16 && this.maze[row + 1][col] != WALL_H && this.maze[row + 2][col] != 'v')
                this.traverseb(row + 2, col)
            if (col < 16 && this.maze[row][col + 1] != WALL_V && this.maze[row][col + 2] != 'v')
                this.traverseb(row, col + 2)
            if (col > 0 && this.maze[row][col - 1] != WALL_V && this.maze[row][col - 2] != 'v')
                this.traverseb(row, col - 2)
            if (row > 0 && this.maze[row - 1][col] != WALL_H && this.maze[row - 2][col] != 'v')
                this.traverseb(row - 2, col)
        }
        if (wcb != true)
            wcb = false
    }
}
function BuildGame() {
    tor = 0
    idnum = 0
    idsp = 8
    sidsp = 152
    ti = 0
    walls = 9
    wallsb = 9
    arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": 9 </div>"
    for (i = 1; i < 10; i++) {
        arrwf[i] = "<button class='wallsa' style='width:100px;height:10px'> </button>"
        arrwf[i] += "</br> "
    }
    arrwb = new Array(1)
    arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": 9 </div>"
    for (i = 1; i < 10; i++) {
        arrwb[i] = "<button class='wallsb' style='width:100px;height:10px'> </button>"
        arrwb[i] += "</br> "
    }
    for (i = 0; i < arr.length; i++) {
        arr[i] = new Array(arrrows)
        for (s = 0; s < arr[i].length; s = s + 2) {
            if (i % 2 == 0) {
                if (i == 16 && s == 8) {
                    arr[i][s] = "<button id='" + idnum.toString() + "' class='playeras" + (skinss + 1) + "' style='width:56px;height:56px'> </button>";
                    s = s + 2
                    idnum += 2
                }
                arr[i][s] = "<button id='" + idnum.toString() + "' onclick='move(this)'  class='player-tiles' style='width:56px;height:56px'> </button>";
                idnum += 2
            }
        }
    }
    idnum = 1;
    for (i = 0; i < arr.length; i = i + 2) {
        for (s = 1; s < arr[i].length; s = s + 2) {
            arr[i][s] = "<button id='" + idnum.toString() + "' onclick='wallf(this)' class='wall-tilesa' style='width:20px;height:56px'> </button>";
            idnum++
            idnum++
        }
        for (ti = 0; ti < 18; ti++) {
            idnum++
        }
    }
    idnum = 1
    for (i = 1; i < arr.length; i = i + 2) {
        for (ti = 0; ti < 16; ti++) {
            idnum++
        }
        for (s = 0; s < arr[i].length; s++) {
            if (s % 2 == 1) {
                arr[i][s] = WALL_EMPTY_SLOT;
            }
            else {
                arr[i][s] = "<button id='" + idnum.toString() + "' onclick='wallf(this)' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                idnum++
                idnum++
            }
        }
    }
    arr[0][8] = P2_TILE();
    if (drawgame == 1) {
        var text = "";
        for (i = 0; i < arrrows; i++) {
            if (i % 2 == 0) {
                for (s = 0; s < arr[i].length; s++) {
                    text += arr[i][s]
                }
            }
            else {
                for (s = 0; s < arr[i].length; s++) {
                    text += arr[i][s]
                }
            }
            text += "</br> "
        }
        games.innerHTML = text
        text = "";
        for (i = 0; i < 10; i++) {
            text += arrwf[i]
        }
        document.getElementById("tilea").innerHTML = text
        text = "";
        for (i = 0; i < 10; i++) {
            text += arrwb[i]
        }
        document.getElementById("tileb").innerHTML = text

    }
}
function inBounds(r, c) {
    return r >= 0 && r <= 16 && c >= 0 && c <= 16;
}

function P1_TILE() {
    return "<button id='152' class='playeras" + (skinss + 1) + "' style='width:56px;height:56px'> </button>";
}
function P2_TILE() {
    return "<button id='8' class='playerb' style='width:56px;height:56px'> </button>";
}
var iscomputerplaying = 1; // 1 = PvE (P2 is the computer), 0 = PvP
var aiDepth = 3; // default difficulty, used by runComputerTurn instead of a hardcoded 2

function toggleSettings() {
    var panel = document.getElementById("settings");
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
}

function setGameMode(mode) {
    iscomputerplaying = (mode === 'pve') ? 1 : 0;
    refreshNames();
}

function setDifficulty(value) {
    aiDepth = parseInt(value, 10);
}

// ===================== AI: grid-based helpers =====================

function cloneGrid(grid) {
    var copy = new Array(grid.length);
    for (var i = 0; i < grid.length; i++) {
        copy[i] = grid[i].slice();
    }
    return copy;
}

function isWallBetweenGrid(grid, r1, c1, r2, c2) {
    if (r1 === r2) {
        var wallCol = (c1 + c2) / 2;
        return grid[r1][wallCol] === WALL_V;
    } else {
        var wallRow = (r1 + r2) / 2;
        return grid[wallRow][c1] === WALL_H;
    }
}

function findShortestPathGrid(grid, startRow, startCol, goalRow) {
    var best = {};
    var bestToGoal = Infinity;
    function explore(row, col, dist) {
        var key = row + "," + col;
        if (best[key] !== undefined && best[key] <= dist) return;
        best[key] = dist;
        if (row === goalRow) { if (dist < bestToGoal) bestToGoal = dist; return; }
        if (dist >= bestToGoal) return;
        var dirs = [{ dr: -2, dc: 0 }, { dr: 2, dc: 0 }, { dr: 0, dc: -2 }, { dr: 0, dc: 2 }];
        for (var i = 0; i < dirs.length; i++) {
            var nr = row + dirs[i].dr, nc = col + dirs[i].dc;
            if (!inBounds(nr, nc)) continue;
            if (isWallBetweenGrid(grid, row, col, nr, nc)) continue;
            explore(nr, nc, dist + 1);
        }
    }
    explore(startRow, startCol, 0);
    return bestToGoal;
}

// Same as above but also returns the actual shortest route (array of [row,col]).
function findShortestPathWithRoute(grid, startRow, startCol, goalRow) {
    var best = {};
    var bestToGoal = Infinity;
    var bestPath = null;
    function explore(row, col, dist, path) {
        var key = row + "," + col;
        if (best[key] !== undefined && best[key] <= dist) return;
        best[key] = dist;
        if (row === goalRow) {
            if (dist < bestToGoal) { bestToGoal = dist; bestPath = path.slice(); }
            return;
        }
        if (dist >= bestToGoal) return;
        var dirs = [{ dr: -2, dc: 0 }, { dr: 2, dc: 0 }, { dr: 0, dc: -2 }, { dr: 0, dc: 2 }];
        for (var i = 0; i < dirs.length; i++) {
            var nr = row + dirs[i].dr, nc = col + dirs[i].dc;
            if (!inBounds(nr, nc)) continue;
            if (isWallBetweenGrid(grid, row, col, nr, nc)) continue;
            path.push([nr, nc]);
            explore(nr, nc, dist + 1, path);
            path.pop();
        }
    }
    explore(startRow, startCol, 0, [[startRow, startCol]]);
    return { dist: bestToGoal, path: bestPath || [] };
}

function tryAddWallCandidate(candidates, checked, grid, pfp, psp, orientation, p1row, p1col, p2row, p2col) {
    if (pfp < 0 || pfp > 16 || psp < 0 || psp > 16) return;
    var key = orientation + ':' + pfp + ':' + psp;
    if (checked[key]) return;
    checked[key] = true;

    var testGrid = cloneGrid(grid);
    if (orientation === 'h') {
        if (pfp % 2 !== 1 || psp % 2 !== 0 || psp > 14 || psp < 0) return;
        if (pfp < 0 || pfp > 16) return;
        if (grid[pfp][psp] == null || grid[pfp][psp + 1] == null || grid[pfp][psp + 2] == null) return;
        if (grid[pfp][psp] == WALL_H) return; // already a wall here
        if (grid[pfp][psp + 1] == WALL_V_MID_MARKER) return; // crosses a vertical wall's midpoint
        if (grid[pfp][psp + 2] == WALL_H) return;
        testGrid[pfp][psp] = WALL_H;
        testGrid[pfp][psp + 1] = WALL_H_MID_MARKER;
        testGrid[pfp][psp + 2] = WALL_H;
    } else {
        if (pfp % 2 !== 0 || psp % 2 !== 1 || pfp > 14 || pfp < 0) return;
        if (psp < 0 || psp > 16) return;
        if (grid[pfp][psp] == null || grid[pfp + 1] == null || grid[pfp + 1][psp] == null || grid[pfp + 2] == null || grid[pfp + 2][psp] == null) return;
        if (grid[pfp][psp] == WALL_V) return; // already a wall here
        if (grid[pfp + 1][psp] != WALL_EMPTY_SLOT) return; // crosses a horizontal wall's midpoint (or already occupied)
        if (grid[pfp + 2][psp] == WALL_V) return;
        testGrid[pfp][psp] = WALL_V;
        testGrid[pfp + 1][psp] = WALL_V_MID_MARKER;
        testGrid[pfp + 2][psp] = WALL_V;
    }

    if (findShortestPathGrid(testGrid, p1row, p1col, 0) < Infinity &&
        findShortestPathGrid(testGrid, p2row, p2col, 16) < Infinity) {
        candidates.push({ orientation: orientation, pfp: pfp, psp: psp });
    }
}
function evaluatePositionGrid(grid, p1row, p1col, p2row, p2col, wallsP1Left, wallsP2Left) {
    var p1Dist = findShortestPathGrid(grid, p1row, p1col, 0);
    var p2Dist = findShortestPathGrid(grid, p2row, p2col, 16);
    if (p1Dist === 0) return 9999;
    if (p2Dist === 0) return -9999;
    var score = p2Dist - p1Dist;
    score += (wallsP1Left - wallsP2Left) * 1.5;

    score -= p2Dist * 0.01;
    score += p1Dist * 0.01;

    return score;
}

// toMove: 1 or 2. Generates every legal pawn move + nearby legal walls for that player.
function generateMoves(grid, toMove, p1row, p1col, p2row, p2col, wallsLeft) {
    var moves = [];
    var myRow = toMove === 1 ? p1row : p2row;
    var myCol = toMove === 1 ? p1col : p2col;
    var oppRow = toMove === 1 ? p2row : p1row;
    var oppCol = toMove === 1 ? p2col : p1col;

    if (myRow < 16 && grid[myRow + 1][myCol] != WALL_H && grid[myRow + 2][myCol] != grid[oppRow][oppCol]) {
        moves.push({ type: 'pawn', row: myRow + 2, col: myCol });
    }
    if (myCol < 16 && grid[myRow][myCol + 1] != WALL_V && grid[myRow][myCol + 2] != grid[oppRow][oppCol]) {
        moves.push({ type: 'pawn', row: myRow, col: myCol + 2 });
    }
    if (myCol > 0 && grid[myRow][myCol - 1] != WALL_V && grid[myRow][myCol - 2] != grid[oppRow][oppCol]) {
        moves.push({ type: 'pawn', row: myRow, col: myCol - 2 });
    }
    if (myRow > 0 && grid[myRow - 1][myCol] != WALL_H && grid[myRow - 2][myCol] != grid[oppRow][oppCol]) {
        moves.push({ type: 'pawn', row: myRow - 2, col: myCol });
    }

    if (myCol < 14 && grid[myRow][myCol + 1] != WALL_V && grid[myRow][myCol + 3] != WALL_V && grid[myRow][myCol + 2] == grid[oppRow][oppCol]) {
        moves.push({ type: 'pawn', row: myRow, col: myCol + 4 });
    }
    if (myCol > 2 && grid[myRow][myCol - 1] != WALL_V && grid[myRow][myCol - 3] != WALL_V && grid[myRow][myCol - 2] == grid[oppRow][oppCol]) {
        moves.push({ type: 'pawn', row: myRow, col: myCol - 4 });
    }
    if (myRow < 14 && grid[myRow + 1][myCol] != WALL_H && grid[myRow + 3][myCol] != WALL_H && grid[myRow + 2][myCol] == grid[oppRow][oppCol]) {
        moves.push({ type: 'pawn', row: myRow + 4, col: myCol });
    }
    if (myRow > 2 && grid[myRow - 1][myCol] != WALL_H && grid[myRow - 3][myCol] != WALL_H && grid[myRow - 2][myCol] == grid[oppRow][oppCol]) {
        moves.push({ type: 'pawn', row: myRow - 4, col: myCol });
    }

    if (myRow > 0 && myCol < 16 &&
        ((grid[myRow - 1][myCol] != WALL_H && (myRow == 2 || grid[myRow - 3][myCol] == WALL_H) &&
            grid[myRow - 2][myCol + 1] != WALL_V && (grid[myRow - 2][myCol] == grid[oppRow][oppCol])) ||
            (grid[myRow][myCol + 1] != WALL_V && (myCol == 14 || grid[myRow][myCol + 3] == WALL_V) &&
                grid[myRow - 1][myCol + 2] != WALL_H && (grid[myRow][myCol + 2] == grid[oppRow][oppCol])))) {
        moves.push({ type: 'pawn', row: myRow - 2, col: myCol + 2 });
    }
    if (myRow < 16 && myCol < 16 &&
        ((grid[myRow + 1][myCol] != WALL_H && (myRow == 14 || grid[myRow + 3][myCol] == WALL_H) &&
            grid[myRow + 2][myCol + 1] != WALL_V && (grid[myRow + 2][myCol] == grid[oppRow][oppCol])) ||
            (grid[myRow][myCol + 1] != WALL_V && (myCol == 14 || grid[myRow][myCol + 3] == WALL_V) &&
                grid[myRow + 1][myCol + 2] != WALL_H && (grid[myRow][myCol + 2] == grid[oppRow][oppCol])))) {
        moves.push({ type: 'pawn', row: myRow + 2, col: myCol + 2 });
    }
    if (myRow < 16 && myCol > 0 &&
        ((grid[myRow + 1][myCol] != WALL_H && (myRow == 14 || grid[myRow + 3][myCol] == WALL_H) &&
            grid[myRow + 2][myCol - 1] != WALL_V && (grid[myRow + 2][myCol] == grid[oppRow][oppCol])) ||
            (grid[myRow][myCol - 1] != WALL_V && (myCol == 2 || grid[myRow][myCol - 3] == WALL_V) &&
                grid[myRow + 1][myCol - 2] != WALL_H && (grid[myRow][myCol - 2] == grid[oppRow][oppCol])))) {
        moves.push({ type: 'pawn', row: myRow + 2, col: myCol - 2 });
    }
    if (myRow > 0 && myCol > 0 &&
        ((grid[myRow - 1][myCol] != WALL_H && (myRow == 2 || grid[myRow - 3][myCol] == WALL_H) &&
            grid[myRow - 2][myCol - 1] != WALL_V && (grid[myRow - 2][myCol] == grid[oppRow][oppCol])) ||
            (grid[myRow][myCol - 1] != WALL_V && (myCol == 2 || grid[myRow][myCol - 3] == WALL_V) &&
                grid[myRow - 1][myCol - 2] != WALL_H && (grid[myRow][myCol - 2] == grid[oppRow][oppCol])))) {
        moves.push({ type: 'pawn', row: myRow - 2, col: myCol - 2 });
    }

    if (wallsLeft > 0) {
        var targetRow = toMove === 1 ? p2row : p1row;
        var targetCol = toMove === 1 ? p2col : p1col;
        var targetGoal = toMove === 1 ? 16 : 0;
        var wallCandidates = getLegalWallCandidatesGeneric(grid, p1row, p1col, p2row, p2col, targetRow, targetCol, targetGoal);
        for (var w = 0; w < wallCandidates.length; w++) {
            moves.push({ type: 'wall', orientation: wallCandidates[w].orientation, pfp: wallCandidates[w].pfp, psp: wallCandidates[w].psp });
        }
    }

    return moves;
}
// Only generates walls that intersect P1's and P2's current shortest routes — this is
// what lets the AI "see" the value of a good wall at low depth, since it's
// guaranteed to be considering the opponent's actual path, not random spots.
function getLegalWallCandidatesGeneric(grid, p1row, p1col, p2row, p2col, targetRow, targetCol, targetGoal) {
    var candidates = [];
    var checked = {};
    var route = findShortestPathWithRoute(grid, targetRow, targetCol, targetGoal).path;

    for (var i = 0; i < route.length - 1; i++) {
        var r1 = route[i][0], c1 = route[i][1];
        var r2 = route[i + 1][0], c2 = route[i + 1][1];

        if (r1 === r2) {
            var wallCol = Math.min(c1, c2) + 1;
            var rowBase = r1;
            tryAddWallCandidate(candidates, checked, grid, rowBase - 2, wallCol, 'v', p1row, p1col, p2row, p2col);
            tryAddWallCandidate(candidates, checked, grid, rowBase, wallCol, 'v', p1row, p1col, p2row, p2col);
        } else {
            var wallRow = Math.min(r1, r2) + 1;
            var colBase = c1;
            tryAddWallCandidate(candidates, checked, grid, wallRow, colBase - 2, 'h', p1row, p1col, p2row, p2col);
            tryAddWallCandidate(candidates, checked, grid, wallRow, colBase, 'h', p1row, p1col, p2row, p2col);
        }
    }

    if (candidates.length > 8) candidates = candidates.slice(0, 8);
    return candidates;
}

function applyMove(grid, move, toMove, p1row, p1col, p2row, p2col) {
    var newGrid = grid;
    var newP1row = p1row, newP1col = p1col, newP2row = p2row, newP2col = p2col;

    if (move.type === 'pawn') {
        if (toMove === 1) { newP1row = move.row; newP1col = move.col; }
        else { newP2row = move.row; newP2col = move.col; }
    } else {
        newGrid = cloneGrid(grid);
        if (move.orientation === 'h') {
            newGrid[move.pfp][move.psp] = WALL_H;
            newGrid[move.pfp][move.psp + 1] = WALL_H_MID_MARKER;
            newGrid[move.pfp][move.psp + 2] = WALL_H;
        } else {
            newGrid[move.pfp][move.psp] = WALL_V;
            newGrid[move.pfp + 1][move.psp] = WALL_V_MID_MARKER;
            newGrid[move.pfp + 2][move.psp] = WALL_V;
        }
    }
    return { grid: newGrid, p1row: newP1row, p1col: newP1col, p2row: newP2row, p2col: newP2col };
}

// Cheap depth-0 guess used to order moves before the real recursive search,
// so alpha-beta prunes more branches (strong moves get tried first).
function orderMoves(moves, grid, toMove, p1row, p1col, p2row, p2col, wallsP1Left, wallsP2Left) {
    var scored = moves.map(function (m) {
        var next = applyMove(grid, m, toMove, p1row, p1col, p2row, p2col);
        var nextWallsP1 = (toMove === 1 && m.type === 'wall') ? wallsP1Left - 1 : wallsP1Left;
        var nextWallsP2 = (toMove === 2 && m.type === 'wall') ? wallsP2Left - 1 : wallsP2Left;
        var guess = evaluatePositionGrid(next.grid, next.p1row, next.p1col, next.p2row, next.p2col, nextWallsP1, nextWallsP2);
        return { move: m, guess: guess };
    });
    if (toMove === 1) {
        scored.sort(function (a, b) { return b.guess - a.guess; });
    } else {
        scored.sort(function (a, b) { return a.guess - b.guess; });
    }
    return scored.map(function (s) { return s.move; });
}

// Full alpha-beta minimax over pawn moves AND walls.
function minimax(grid, p1row, p1col, p2row, p2col, wallsP1Left, wallsP2Left, depth, alpha, beta, toMove) {
    var p1Dist = findShortestPathGrid(grid, p1row, p1col, 0);
    var p2Dist = findShortestPathGrid(grid, p2row, p2col, 16);
    if (p1Dist === 0) return { score: 9999 + depth, move: null };
    if (p2Dist === 0) return { score: -9999 - depth, move: null };

    if (depth === 0) {
        return { score: evaluatePositionGrid(grid, p1row, p1col, p2row, p2col, wallsP1Left, wallsP2Left), move: null };
    }

    var myWallsLeft = toMove === 1 ? wallsP1Left : wallsP2Left;
    var moves = generateMoves(grid, toMove, p1row, p1col, p2row, p2col, myWallsLeft);
    moves = orderMoves(moves, grid, toMove, p1row, p1col, p2row, p2col, wallsP1Left, wallsP2Left);
    var bestMove = moves.length > 0 ? moves[0] : null;

    if (toMove === 1) {
        var best = -Infinity;
        for (var i = 0; i < moves.length; i++) {
            var m = moves[i];
            var next = applyMove(grid, m, 1, p1row, p1col, p2row, p2col);
            var nextWallsP1 = m.type === 'wall' ? wallsP1Left - 1 : wallsP1Left;
            var result = minimax(next.grid, next.p1row, next.p1col, next.p2row, next.p2col, nextWallsP1, wallsP2Left, depth - 1, alpha, beta, 2);
            if (result.score > best ||
                (result.score === best && m.type === 'pawn' && bestMove && bestMove.type === 'pawn' &&
                    findShortestPathGrid(grid, m.row, m.col, 0) < findShortestPathGrid(grid, bestMove.row, bestMove.col, 0))) {
                best = result.score; bestMove = m;
            }
            if (best > alpha) alpha = best;
            if (alpha >= beta) break;
        }
        return { score: best, move: bestMove };
    }
    else {
        var best2 = Infinity;
        for (var j = 0; j < moves.length; j++) {
            var m2 = moves[j];
            var next2 = applyMove(grid, m2, 2, p1row, p1col, p2row, p2col);
            var nextWallsP2 = m2.type === 'wall' ? wallsP2Left - 1 : wallsP2Left;
            var result2 = minimax(next2.grid, next2.p1row, next2.p1col, next2.p2row, next2.p2col, wallsP1Left, nextWallsP2, depth - 1, alpha, beta, 1);
            if (result2.score < best2 ||
                (result2.score === best2 && m2.type === 'pawn' && bestMove && bestMove.type === 'pawn' &&
                    findShortestPathGrid(grid, m2.row, m2.col, 16) < findShortestPathGrid(grid, bestMove.row, bestMove.col, 16))) {
                best2 = result2.score; bestMove = m2;
            }
            if (best2 < beta) beta = best2;
            if (alpha >= beta) break;
        }
        return { score: best2, move: bestMove };
    }


}

// ===================== AI: execution on the real board =====================

function placeComputerWall(orientation, pfp, psp) {
    for (i = 0; i < 17; i++) {
        mc[i] = new Array(17);
        for (s = 0; s < 17; s++) {
            mc[i][s] = arr[i][s];
        }
    }

    var rc = 0;
    if (orientation === 'h') {
        if (mc[pfp][psp + 1] != WALL_V_MID_MARKER && mc[pfp][psp + 2] != WALL_H) {
            mc[pfp][psp] = WALL_H;
            mc[pfp][psp + 1] = WALL_H_MID_MARKER;
            mc[pfp][psp + 2] = WALL_H;
            rc++;
        }
    } else {
        if (mc[pfp + 1][psp] == WALL_EMPTY_SLOT && mc[pfp + 2][psp] != WALL_V) {
            mc[pfp][psp] = WALL_V;
            mc[pfp + 1][psp] = WALL_V_MID_MARKER;
            mc[pfp + 2][psp] = WALL_V;
            rc++;
        }
    }

    for (i = 0; i < 17; i++) {
        mcr[i] = new Array(17);
        for (s = 0; s < 17; s++) { mcr[i][s] = mc[i][s]; }
    }
    for (i = 0; i < 17; i++) {
        mcb[i] = new Array(17);
        for (s = 0; s < 17; s++) { mcb[i][s] = mc[i][s]; }
    }

    var ssp = idsp % 18;
    var sfp = Math.floor(idsp / 18) * 2;
    var fsp = sidsp % 18;
    var ffp = Math.floor(sidsp / 18) * 2;
    const ms = new wallchecka(mc);
    const msb = new wallcheckb(mcb);
    ms.traversea(ffp, fsp);
    msb.traverseb(sfp, ssp);

    if (wc == true && wcb == true && rc > 0) {
        for (i = 0; i < 17; i++) {
            for (s = 0; s < 17; s++) { arr[i][s] = mcr[i][s]; }
        }
        arrwf[0] = "<div class='texta' style='opacity:100%'> " + p1Name() + ": " + (walls).toString() + " </div>";
        arrwb[wallsb] = "";
        wallsb--;
        tor++;
        arrwb[0] = "<div class='textb' style='opacity:30%'> " + p2Name() + ": " + (wallsb).toString() + " </div>";
    } else {
        console.warn("placeComputerWall: chosen wall was illegal on the real board, skipping");
        return;
    }

    for (i = 0; i < 17; i++) {
        mc[i] = new Array(17);
        for (s = 0; s < 17; s++) { mc[i][s] = arr[i][s]; }
    }
}

function computerMove(depth) {
    if (tor % 2 != 1) return;

    for (i = 0; i < 17; i++) {
        mc[i] = new Array(17);
        for (s = 0; s < 17; s++) { mc[i][s] = arr[i][s]; }
    }

    var P1row = Math.floor(sidsp / 18) * 2;
    var P1col = sidsp % 18;
    var P2row = Math.floor(idsp / 18) * 2;
    var P2col = idsp % 18;

    var result = minimax(mc, P1row, P1col, P2row, P2col, walls, wallsb, depth || 2, -Infinity, Infinity, 2);
    var decision = result.move;

    console.log("AI move:", decision, "score:", result.score);

    if (!decision) { console.warn("computerMove: no legal move found"); return; }

    window._lastP2pos = { row: P2row, col: P2col };

    if (decision.type === 'wall') {
        placeComputerWall(decision.orientation, decision.pfp, decision.psp);
        return;
    }

    var targetId = 9 * decision.row + decision.col;
    move({ id: targetId });
}

function runComputerTurn(delay) {
    if (!iscomputerplaying) return;
    if (tor % 2 != 1) return;
    if (allow === 0 && (del.style.display == "block")) return;

    allow = 0;

    setTimeout(function () {
        if (del.style.display == "block") return;

        allow = 1;
        computerMove(aiDepth);

        if (del.style.display == "none") {
            allow = 1;
        }

        var text = "";
        for (i = 0; i < arrrows; i++) {
            for (s = 0; s < arr[i].length; s++) {
                text += arr[i][s];
            }
            text += "</br> ";
        }
        games.innerHTML = text;

        text = "";
        for (i = 0; i < 10; i++) { text += arrwf[i]; }
        document.getElementById("tilea").innerHTML = text;

        text = "";
        for (i = 0; i < 10; i++) { text += arrwb[i]; }
        document.getElementById("tileb").innerHTML = text;

    }, delay || 600);
}

// ===================== player names shown above the board =====================
var qurridorUser = ""; // set by auth.js after login
function shortName(n) { return n.length > 10 ? n.slice(0, 9) + "\u2026" : n; }
var onlineNames = null; // [host, guest] while playing online (set by online.js)
function p1Name() { if (onlineNames) return shortName(onlineNames[0]); return qurridorUser ? shortName(qurridorUser) : "player1"; }
function p2Name() { if (onlineNames) return shortName(onlineNames[1]); return iscomputerplaying ? "computer" : "player2"; }
function nameLabel(html, name) {
    return html.replace(/(<div[^>]*>\s*)[^:<]*(:)/, function (m, a, b) { return a + name + b; });
}
// rewrite the labels that are already built (used after login and when the mode changes)
function refreshNames() {
    if (arrwf[0]) arrwf[0] = nameLabel(arrwf[0], p1Name());
    if (arrwb[0]) arrwb[0] = nameLabel(arrwb[0], p2Name());
    var ta = document.getElementById("tilea"), tb = document.getElementById("tileb"), text, k;
    if (ta && ta.innerHTML) { text = ""; for (k = 0; k < 10; k++) { text += arrwf[k]; } ta.innerHTML = text; }
    if (tb && tb.innerHTML) { text = ""; for (k = 0; k < 10; k++) { text += arrwb[k]; } tb.innerHTML = text; }
}
refreshNames();
