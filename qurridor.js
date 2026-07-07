var resign = document.getElementById("draw");
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
var walls = 0
var wallsb = 0
var wina = 0
var winb = 0
var skinss = 0
var unlock1 = false
var unlock2 = false
var unlock3 = false
var unlock4 = false
var unlock5 = false
var wc;
var wcb;
var col = 0
var row = 0
var mc = new Array(17)
var mcb = new Array(17)

var mcr = new Array(17)
vsod.innerHTML = "vso:" + vso
arrrows = arrrows * 2;
arrrows--
const arr = new Array(arrrows)
var i, s;
var arrwf = new Array(1)
arrwf[0] = "<div class='textat'> you:9 </div>"
for (i = 1; i < 10; i++) {
    arrwf[i] = "<button class='wallsa' style='width:100px;height:10px'> </button>"
    arrwf[i] += "</br> "

}
var arrwb = new Array(1)
arrwb[0] = "<div class='textb'> enemy:9 </div>"
for (i = 1; i < 10; i++) {
    arrwb[i] = "<button class='wallsb' style='width:100px;height:10px'> </button>"
    arrwb[i] += "</br> "
}
for (i = 0; i < arr.length; i++) {
    arr[i] = new Array(arrrows)
    for (s = 0; s < arr[i].length; s = s + 2) {
        if (i % 2 == 0) {
            if (i == 16 && s == 8) {
                arr[i][s] = "<button id='" + idnum.toString() + "' class='playeras1' style='width:56px;height:56px'> </button>";
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
        arr[i][s] = "<button id='" + idnum.toString() + "' onclick='wallf(this)' class='wall-tilesa' style='width:20px;height:56px' >  </button>";
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
            arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
        }
        else {
            arr[i][s] = "<button id='" + idnum.toString() + "' onclick='wallf(this)' class='wall-tilesb' style='width:56px;height:20px'>  </button>";
            idnum++
            idnum++
        }
    }
}
var tidnum = 8;
arr[0][8] = "<button id='" + tidnum.toString() + "' class='playerb' style='width:56px;height:56px'> </button>";
function game() {
    if (del.classList == "wce") {
        del.classList = "uwin"
    }
    else {
        vsod.innerHTML = "vso:" + vso
        scorea.innerHTML = "" + wina + "." + winb + ""
        scoreb.innerHTML = "" + winb + "." + wina + ""
        document.getElementById("draw").classList = "draw"
        games.classList = "game"
        scorea.classList = "scorea"
        scoreb.classList = "scoreb"
        shop.classList = "uwin"
        ff.classList = "uwin"
        pa.classList = "uwin"
        pb.classList = "uwin"
        pc.classList = "uwin"
        pd.classList = "uwin"
        pe.classList = "uwin"
        pf.classList = "uwin"
        title.classList = "uwin"
        rules.classList = "bmm"
        rules.innerHTML = ""
        if (del.classList == "win") {
            tor = 0
            idnum = 0
            idsp = 8
            sidsp = 152
            ti = 0
            walls = 0
            wallsb = 0
            arrwf[0] = "<div class='textat'> you:9 </div>"
            for (i = 1; i < 10; i++) {
                arrwf[i] = "<button class='wallsa' style='width:100px;height:10px'> </button>"
                arrwf[i] += "</br> "
            }
            arrwb = new Array(1)
            arrwb[0] = "<div class='textb'> enemy:9 </div>"
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
                        arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
                    }
                    else {
                        arr[i][s] = "<button id='" + idnum.toString() + "' onclick='wallf(this)' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                        idnum++
                        idnum++
                    }
                }
            }
            tidnum = 8;
            arr[0][8] = "<button id='" + tidnum.toString() + "' class='playerb' style='width:56px;height:56px'> </button>";
        }
        if (del.classList != "uwin") {
            del.classList = "uwin"
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
    }
}
function move(p) {
    idnum = p.id
    var idc = (p.id)
    var sp = idc % 18;
    var fp = (Math.floor(idc / 18)) * 2
    var psp;
    var pfp;
    if (tor % 2 == 1) {
        psp = idsp % 18
        pfp = (Math.floor(idsp / 18)) * 2
        if (psp == sp - 2 && pfp == fp - 2 && arr[pfp + 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 3][psp] == "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 2][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp - 2] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp][sp - 2] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp][sp - 2] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp][sp - 2] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp][sp - 2] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 20; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp - 2 && pfp == fp - 2 && arr[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp + 3] == "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp + 1][psp + 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp - 2][sp] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 20; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp + 2 && pfp == fp - 2 && arr[pfp + 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 3][psp] == "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 2][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp + 2] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp][sp + 2] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp][sp + 2] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp][sp + 2] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp][sp + 2] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 16; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp + 2 && pfp == fp - 2 && arr[pfp][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp - 3] == "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp + 1][psp - 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp - 2][sp] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 16; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp + 2 && pfp == fp + 2 && arr[pfp - 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 3][psp] == "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 2][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp + 2] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp][sp + 2] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp][sp + 2] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp][sp + 2] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp][sp + 2] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 20; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp + 2 && pfp == fp + 2 && arr[pfp][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp - 3] == "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp - 1][psp - 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp + 2][sp] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp + 2][sp] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp + 2][sp] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp + 2][sp] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp + 2][sp] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 20; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp - 2 && pfp == fp + 2 && arr[pfp - 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 3][psp] == "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 2][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp - 2] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp][sp - 2] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp][sp - 2] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp][sp - 2] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp][sp - 2] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 16; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp - 2 && pfp == fp + 2 && arr[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp + 3] == "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp - 1][psp + 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp + 2][sp] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp + 2][sp] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp + 2][sp] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp + 2][sp] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp + 2][sp] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 16; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp && pfp == fp - 4 && arr[pfp + 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 3][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp - 2][sp] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>"
                || arr[fp - 2][sp] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 36; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
                if (fp == 16) {
                    resign.classList = "uwin"
                    winb++
                    rules.classList = "uwin"
                    del.innerHTML = "you lost! <br /> <br /> click to play again"
                    del.classList = "win"
                    for (i = 0; i < arr.length; i++) {
                        arr[i] = new Array(arrrows)
                        for (s = 0; s < arr[i].length; s = s + 2) {
                            if (i % 2 == 0) {
                                arr[i][s] = "<button id='" + idnum.toString() + "'  class='player-tiles' style='width:56px;height:56px'> </button>";
                                idnum += 2
                            }
                        }
                    }
                    idnum = 1;
                    for (i = 0; i < arr.length; i = i + 2) {
                        for (s = 1; s < arr[i].length; s = s + 2) {
                            arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesa' style='width:20px;height:56px'> </button>";
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
                                arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
                            }
                            else {
                                arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                                idnum++
                                idnum++
                            }
                        }
                    }
                    arr[fp][sp] = tidsp
                }
            }
        }
        if (psp == sp && pfp == fp + 4 && arr[pfp - 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 3][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp + 2][sp] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>" || arr[fp + 2][sp] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>" || arr[fp + 2][sp] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>" || arr[fp + 2][sp] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>" || arr[fp + 2][sp] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 36; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
            }
        }
        if (psp == sp + 4 && pfp == fp && arr[pfp][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp - 3] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp + 2] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>" || arr[fp][sp + 2] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>" || arr[fp][sp + 2] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>" || arr[fp][sp + 2] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>" || arr[fp][sp + 2] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                tidsp = arr[pfp][psp]
                idnum++
                idnum++
                idnum++
                idnum++
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
                tor++
            }
        }
        if (psp == sp - 4 && pfp == fp && arr[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp + 3] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp - 2] == "<button id='152' class='playeras1' style='width:56px;height:56px'> </button>" || arr[fp][sp - 2] == "<button id='152' class='playeras2' style='width:56px;height:56px'> </button>" || arr[fp][sp - 2] == "<button id='152' class='playeras3' style='width:56px;height:56px'> </button>" || arr[fp][sp - 2] == "<button id='152' class='playeras4' style='width:56px;height:56px'> </button>" || arr[fp][sp - 2] == "<button id='152' class='playeras5' style='width:56px;height:56px'> </button>") {
                tidsp = arr[pfp][psp]
                idnum--
                idnum--
                idnum--
                idnum--
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                idsp = idc
                tor++
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp && pfp == fp - 2 && arr[pfp + 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
            arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            for (i = 0; i < 18; i++) {
                idnum--
            }
            tidsp = arr[pfp][psp]
            arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
            arr[fp][sp] = tidsp
            idsp = idc
            idnum--
            idnum--
            idnum--
            idnum--
            tor++
            if (fp == 16) {
                winb++
                rules.classList = "uwin"
                resign.classList = "uwin"
                del.innerHTML = "you lost! <br /> <br /> click to play again"
                del.classList = "win"
                for (i = 0; i < arr.length; i++) {
                    arr[i] = new Array(arrrows)
                    for (s = 0; s < arr[i].length; s = s + 2) {
                        if (i % 2 == 0) {
                            arr[i][s] = "<button id='" + idnum.toString() + "'  class='player-tiles' style='width:56px;height:56px'> </button>";
                            idnum += 2
                        }
                    }
                }
                idnum = 1;
                for (i = 0; i < arr.length; i = i + 2) {
                    for (s = 1; s < arr[i].length; s = s + 2) {
                        arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesa' style='width:20px;height:56px'> </button>";
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
                            arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
                        }
                        else {
                            arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                            idnum++
                            idnum++
                        }
                    }
                }
                arr[fp][sp] = tidsp
            }
        }
        if (psp == sp && pfp == fp + 2 && arr[pfp - 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            for (i = 0; i < 18; i++) {
                idnum++
            }
            tidsp = arr[pfp][psp]
            arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
            arr[fp][sp] = tidsp
            idsp = idc
            tor++
            arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
            arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"

        }
        if (psp == sp + 2 && pfp == fp && arr[pfp][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            tidsp = arr[pfp][psp]
            idnum++
            idnum++
            arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
            arr[fp][sp] = tidsp
            idsp = idc
            tor++
            arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
            arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
        }
        if (psp == sp - 2 && pfp == fp && arr[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
            tidsp = arr[pfp][psp]
            idnum--
            idnum--
            arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
            arr[fp][sp] = tidsp
            idsp = idc
            tor++
        }
    }
    else {
        psp = sidsp % 18
        pfp = (Math.floor(sidsp / 18)) * 2
        if (psp == sp - 2 && pfp == fp - 2 && arr[pfp + 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 3][psp] == "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 2][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp - 2] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 20; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp - 2 && pfp == fp - 2 && arr[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp + 3] == "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp + 1][psp + 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp - 2][sp] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 20; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp + 2 && pfp == fp - 2 && arr[pfp + 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 3][psp] == "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 2][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp + 2] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 16; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp + 2 && pfp == fp - 2 && arr[pfp][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp - 3] == "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp + 1][psp - 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp - 2][sp] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 16; i++) {
                    idnum--
                }
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp + 2 && pfp == fp + 2 && arr[pfp - 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 3][psp] == "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 2][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp + 2] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 20; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp + 2 && pfp == fp + 2 && arr[pfp][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp - 3] == "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp - 1][psp - 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp + 2][sp] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 20; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp - 2 && pfp == fp + 2 && arr[pfp - 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 3][psp] == "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 2][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp - 2] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 16; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp - 2 && pfp == fp + 2 && arr[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp + 3] == "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp - 1][psp + 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp + 2][sp] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 16; i++) {
                    idnum++
                }
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
        }
        if (psp == sp && pfp == fp - 4 && arr[pfp + 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp + 3][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp - 2][sp] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 36; i++) {
                    idnum--
                }
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
            }
        }
        if (psp == sp && pfp == fp + 4 && arr[pfp - 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && arr[pfp - 3][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            if (arr[fp + 2][sp] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                for (i = 0; i < 36; i++) {
                    idnum++
                }
                tidsp = arr[pfp][psp]
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
                if (fp == 0) {
                    vso += 100
                    rules.classList = "uwin"
                    resign.classList = "uwin"
                    wina++
                    del.innerHTML = "you win! <br /> <br /> click to play again"
                    del.classList = "win"
                    for (i = 0; i < arr.length; i++) {
                        arr[i] = new Array(arrrows)
                        for (s = 0; s < arr[i].length; s = s + 2) {
                            if (i % 2 == 0) {
                                arr[i][s] = "<button id='" + idnum.toString() + "' class='player-tiles' style='width:56px;height:56px'> </button>";
                                idnum += 2
                            }
                        }
                    }
                    idnum = 1;
                    for (i = 0; i < arr.length; i = i + 2) {
                        for (s = 1; s < arr[i].length; s = s + 2) {
                            arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesa' style='width:20px;height:56px'> </button>";
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
                                arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
                            }
                            else {
                                arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                                idnum++
                                idnum++
                            }
                        }
                    }
                    arr[fp][sp] = tidsp
                }
            }
        }
        if (psp == sp + 4 && pfp == fp && arr[pfp][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp - 3] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp + 2] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                idnum++
                idnum++
                idnum++
                idnum++
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
            }
        }
        if (psp == sp - 4 && pfp == fp && arr[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && arr[pfp][psp + 3] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            if (arr[fp][sp - 2] == "<button id='8' class='playerb' style='width:56px;height:56px'> </button>") {
                arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
                tidsp = arr[pfp][psp]
                idnum--
                idnum--
                idnum--
                idnum--
                arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
                arr[fp][sp] = tidsp
                sidsp = idc
                tor++
                arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
            }
        }
        if (psp == sp && pfp == fp - 2 && arr[pfp + 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") { //TOR = 0\
            for (i = 0; i < 18; i++) {
                idnum--
            }
            arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            tidsp = arr[pfp][psp]
            arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
            arr[fp][sp] = tidsp
            sidsp = idc
            tor++
            arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
        }
        if (psp == sp && pfp == fp + 2 && arr[pfp - 1][psp] != "<button class='wallsbi' style='width:56px;height:20px'> </button>") {
            for (i = 0; i < 18; i++) {
                idnum++
            }
            arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            tidsp = arr[pfp][psp]
            arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
            arr[fp][sp] = tidsp
            sidsp = idc
            tor++
            arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
            if (fp == 0) {
                wina++
                rules.classList = "uwin"
                resign.classList = "uwin"
                vso += 100
                del.innerHTML = "you win! <br /> <br /> click to play again"
                del.classList = "win"
                for (i = 0; i < arr.length; i++) {
                    arr[i] = new Array(arrrows)
                    for (s = 0; s < arr[i].length; s = s + 2) {
                        if (i % 2 == 0) {
                            arr[i][s] = "<button id='" + idnum.toString() + "' class='player-tiles' style='width:56px;height:56px'> </button>";
                            idnum += 2
                        }
                    }
                }
                idnum = 1;
                for (i = 0; i < arr.length; i = i + 2) {
                    for (s = 1; s < arr[i].length; s = s + 2) {
                        arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesa' style='width:20px;height:56px'> </button>";
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
                            arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
                        }
                        else {
                            arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                            idnum++
                            idnum++
                        }
                    }
                }
                arr[fp][sp] = tidsp
            }
        }
        if (psp == sp + 2 && pfp == fp && arr[pfp][psp - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            tidsp = arr[pfp][psp]
            idnum++
            idnum++
            arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
            arr[fp][sp] = tidsp
            sidsp = idc
            tor++
            arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
            arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
        }
        if (psp == sp - 2 && pfp == fp && arr[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
            tidsp = arr[pfp][psp]
            idnum--
            idnum--
            arr[pfp][psp] = "<button id='" + idnum.toString() + "' onclick='move(this)' class='player-tiles' style='width:56px;height:56px'> </button>";
            arr[fp][sp] = tidsp
            sidsp = idc
            tor++
            arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"
            arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
        }
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


}
function wallf(wl) {
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
    if (tor % 2 == 0 && walls < 9) {
        if (mc[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:20px'> </button>" && pfp % 2 == 1 && mc[pfp][psp + 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && psp < 16) {
            mc[pfp][psp] = "<button class='wallsbi' style='width:56px;height:20px'> </button>"
            mc[pfp][psp + 1] = "<button class='wallsbhx' style='width:20px;height:20px'> </button>"
            mc[pfp][psp + 2] = "<button class='wallsbi' style='width:56px;height:20px'> </button>"
            //arrwf[9 - walls] = ""
            //arrwf[0] = "<div class='texta'> you: " + (9 - (walls + 1)).toString() + " </div>"
            //walls++
            //tor++
            //arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            rc++
        }
        else {
            if (mc[pfp + 1][psp] == "<button class='wall-tilesn' style='width:20px;height:20px'> </button>" && pfp % 2 == 0 && mc[pfp + 2][psp] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
                mc[pfp][psp] = "<button class='wallsbh' style='width:20px;height:56px'> </button>"
                mc[pfp + 1][psp] = "<button class='wallsbh' style='width:20px;height:20px'> </button>"
                mc[pfp + 2][psp] = "<button class='wallsbh' style='width:20px;height:56px'> </button>"
                //arrwf[0] = "<div class='texta'> you: " + (9 - (walls + 1)).toString() + " </div>"
                //arrwf[9 - walls] = ""
                //walls++
                //tor++
                //arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
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
            arrwf[9 - walls] = ""
            walls++
            arrwf[0] = "<div class='texta'> you: " + (9 - (walls)).toString() + " </div>"

            tor++
            arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
        }
        else {
            del.classList = "wce"
            del.innerHTML = "illegal move"
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
    }
    else {
        if (tor % 2 == 1 && wallsb < 9) {
            if (mc[pfp][psp + 1] != "<button class='wallsbh' style='width:20px;height:20px'> </button>" && pfp % 2 == 1 && mc[pfp][psp + 2] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && psp < 16) {
                mc[pfp][psp] = "<button class='wallsbi' style='width:56px;height:20px'> </button>"
                mc[pfp][psp + 1] = "<button class='wallsbhx' style='width:20px;height:20px'> </button>"
                mc[pfp][psp + 2] = "<button class='wallsbi' style='width:56px;height:20px'> </button>"
                //arrwf[9 - walls] = ""
                //arrwf[0] = "<div class='texta'> you: " + (9 - (walls + 1)).toString() + " </div>"
                //walls++
                //tor++
                //arrwb[0] = "<div class='textbt'> enemy: " + (9 - (wallsb)).toString() + " </div>"
                rc++
            }
            else {
                if (mc[pfp + 1][psp] == "<button class='wall-tilesn' style='width:20px;height:20px'> </button>" && pfp % 2 == 0 && mc[pfp + 2][psp] != "<button class='wallsbh' style='width:20px;height:56px'> </button>") {
                    mc[pfp][psp] = "<button class='wallsbh' style='width:20px;height:56px'> </button>"
                    mc[pfp + 1][psp] = "<button class='wallsbh' style='width:20px;height:20px'> </button>"
                    mc[pfp + 2][psp] = "<button class='wallsbh' style='width:20px;height:56px'> </button>"

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
                arrwf[0] = "<div class='textat'> you: " + (9 - (walls)).toString() + " </div>"
                arrwb[9 - wallsb] = ""
                wallsb++
                tor++
                arrwb[0] = "<div class='textb'> enemy: " + (9 - (wallsb)).toString() + " </div>"
            }
            else {
                del.classList = "wce"
                del.innerHTML = "illegal move"
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
        }

    }
}

function wow() {
    text = ""
    if (rules.classList == "bmm") {
        del.classList = "sbut"
        del.innerHTML = "continue the game:"
        if (tor == 0) {
            del.innerHTML = "start a game:"
            wina = 0
            winb = 0
        }
        document.getElementById("draw").classList = "uwin"
        scorea.classList = "uwin"
        scoreb.classList = "uwin"
        games.innerHTML = text
        games.classList = "uwin"
        rules.classList = "rules"
        title.classList = "title"
        shop.classList = "store"
        pa.classList = "uwin"
        pb.classList = "uwin"
        pc.classList = "uwin"
        pd.classList = "uwin"
        pe.classList = "uwin"
        pf.classList = "uwin"
        title.innerHTML = "tAPY's qurridor, <br /> HAVE FUN!"
        rules.innerHTML = "rules for qurridor:"
        ff.classList = "ff"
        document.getElementById("tileb").innerHTML = text
        document.getElementById("tilea").innerHTML = text
    }
    else {
        del.classList = "uwin"
        games.classList = "rulest"
        games.innerHTML = "<div id='game'> back to main menu <div />"
        ff.classList = "uwin"
        del.innerHTML = "start a game:"
        rules.classList = "srules"
        rules.innerHTML = "PURPOSE OF THE GAME </br > To be the first to reach the line opposite to ones base line </br > RULES FOR 2 PLAYERS </br > Each player places his pawn in the centre of his base </br >How To Play The Game Quoridor </br >  Each player in turn, chooses to move his pawn or to put up one of his fences. When he has run out of fences, the player must move his pawn. </br > PAWN MOVES </br > The pawns are moved one square at a time, horizontally or vertically, forwards or The pawns must get around the fences </br > fences must be placed between 2 sets of 2 square. The fences can be used to facilitate the players progress or to impede that of the opponent,however, an acess to the goal line must always be left open </br >  When two pawns face each other on neighbouring squares which are not separated by a fence, the player whose turn it is can jump the opponents pawn(and place himself behind him), thus advancing an extra square </br > If there is a fence behind the said pawn, the player can place his pawn to the left or the right of the other pawn </br > END OF GAME </br > The first player who reaches one of the 9 squares opposite his base line is the winner </br > TIME OF GAME </br > From 10 to 20 minutes In a tournament, it possible to allocate a set time to each player"
        title.innerHTML = "rules:"
    }
    if (rules.classList == "srules") {
        ee++
        if (ee == 20) {
            games.classList = "win"
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
function wow2() {
    if (games.classList != "game") {
        pa.classList = "uwin"
        pb.classList = "uwin"
        pc.classList = "uwin"
        pd.classList = "uwin"
        pe.classList = "uwin"
        pf.classList = "uwin"
        shop.classList = "store"
        games.classList = "uwin"
        rules.classList = "rules"
        title.innerHTML = "tAPY's qurridor, <br /> HAVE FUN!"
        rules.innerHTML = "rules for qurridor:"
        ff.classList = "ff"
        del.classList = "sbut"
    }
}
function draw() {
    resign.classList = "uwin"
    if (tor % 2 == 0) {
        winb++
        rules.classList = "uwin"
        del.innerHTML = "you lose! <br /> <br /> click to play again"
        del.classList = "win"
        for (i = 0; i < arr.length; i++) {
            for (s = 0; s < arr[i].length; s = s + 2) {
                if (i % 2 == 0) {
                    arr[i][s] = "<button id='" + idnum.toString() + "'  class='player-tiles' style='width:56px;height:56px'> </button>";
                    idnum += 2
                }
            }
        }
        idnum = 1;
        for (i = 0; i < arr.length; i = i + 2) {
            for (s = 1; s < arr[i].length; s = s + 2) {
                arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesa' style='width:20px;height:56px'> </button>";
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
                    arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
                }
                else {
                    arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                    idnum++
                    idnum++
                }
            }
        }
    }
    else {
        rules.classList = "uwin"
        vso += 100
        wina++
        del.innerHTML = "you win! <br /> <br /> click to play again"
        del.classList = "win"
        for (i = 0; i < arr.length; i++) {
            arr[i] = new Array(arrrows)
            for (s = 0; s < arr[i].length; s = s + 2) {
                if (i % 2 == 0) {
                    arr[i][s] = "<button id='" + idnum.toString() + "' class='player-tiles' style='width:56px;height:56px'> </button>";
                    idnum += 2
                }
            }
        }
        idnum = 1;
        for (i = 0; i < arr.length; i = i + 2) {
            for (s = 1; s < arr[i].length; s = s + 2) {
                arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesa' style='width:20px;height:56px'> </button>";
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
                    arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
                }
                else {
                    arr[i][s] = "<button id='" + idnum.toString() + "' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                    idnum++
                    idnum++
                }
            }
        }
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
}
function store() {
    games.classList = "uwin"
    title.innerHTML = "shop:"
    ff.classList = "uwin"
    rules.innerHTML = ""
    rules.classList = "bmm"
    del.classList = "uwin"
    shop.classList = "uwin"
    pa.classList = "s1"
    pb.classList = "s2"
    pc.classList = "s3"
    pd.classList = "s4"
    pe.classList = "s5"
    if (hank == 1) {
        pf.classList = "s6"
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



    tor = 0
    idnum = 0;
    idsp = 8
    sidsp = 152
    ti = 0
    walls = 0
    wallsb = 0
    arrwf[0] = "<div class='textat'> you:9 </div>"
    for (i = 1; i < 10; i++) {
        arrwf[i] = "<button class='wallsa' style='width:100px;height:10px'> </button>"
        arrwf[i] += "</br> "
    }
    arrwb = new Array(1)
    arrwb[0] = "<div class='textb'> enemy:9 </div>"
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
                arr[i][s] = "<button class='wall-tilesn' style='width:20px;height:20px'> </button>";
            }
            else {
                arr[i][s] = "<button id='" + idnum.toString() + "' onclick='wallf(this)' class='wall-tilesb' style='width:56px;height:20px'> </button>";
                idnum++
                idnum++
            }
        }

        tidnum = 8;
        arr[0][8] = "<button id='" + tidnum.toString() + "' class='playerb' style='width:56px;height:56px'> </button>";
    }
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
            if (row > 0 && this.maze[row - 1][col] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && this.maze[row - 2][col] != 'v')
                this.traversea(row - 2, col)
            if (col > 0 && this.maze[row][col - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && this.maze[row][col - 2] != 'v')
                this.traversea(row, col - 2)
            if (col < 16 && this.maze[row][col + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && this.maze[row][col + 2] != 'v')
                this.traversea(row, col + 2)
            if (row < 16 && this.maze[row + 1][col] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && this.maze[row + 2][col] != 'v')
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
            if (row < 16 && this.maze[row + 1][col] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && this.maze[row + 2][col] != 'v')
                this.traverseb(row + 2, col)
            if (col < 16 && this.maze[row][col + 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && this.maze[row][col + 2] != 'v')
                this.traverseb(row, col + 2)
            if (col > 0 && this.maze[row][col - 1] != "<button class='wallsbh' style='width:20px;height:56px'> </button>" && this.maze[row][col - 2] != 'v')
                this.traverseb(row, col - 2)
            if (row > 0 && this.maze[row - 1][col] != "<button class='wallsbi' style='width:56px;height:20px'> </button>" && this.maze[row - 2][col] != 'v')
                this.traverseb(row - 2, col)
        }
        if (wcb != true)
            wcb = false
    }
}
