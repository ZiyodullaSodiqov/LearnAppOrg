var texT1 = "Radiatsion";
var texT2 = "Advektiv";
var texT3 = "Aralashish";
var texT4 = "Koordinat";
var texT5 = "Yonbag’ir";
var texT6 = "Tuman";
var texT7 = "Yog’in";


function resText(){
    var answer1 = document.getElementById("inpAn1").value;
    var answer2 = document.getElementById("inpAn2").value;
    var answer3 = document.getElementById("inpAn3").value;
    var answer4 = document.getElementById("inpAn4").value;
    var answer5 = document.getElementById("inpAn5").value;
    var answer6 = document.getElementById("inpAn6").value;

    if (answer1 == texT1) {
        document.getElementById("inpAn1").style.background = "#6ab04c";
    } else {
        document.getElementById("inpAn1").style.background = "#ff4d4d";
    }

    if (answer2 == texT2) {
        document.getElementById("inpAn2").style.background = "#6ab04c";
    }else {
        document.getElementById("inpAn2").style.background = "#ff4d4d";
    }

    if (answer3 == texT3) {
        document.getElementById("inpAn3").style.background = "#6ab04c";
    }else {
        document.getElementById("inpAn3").style.background = "#ff4d4d";
    }

    if (answer4 == texT4) {
        document.getElementById("inpAn4").style.background = "#6ab04c";
    }else {
        document.getElementById("inpAn4").style.background = "#ff4d4d";
    }

    if (answer5 == texT5) {
        document.getElementById("inpAn5").style.background = "#6ab04c";
    }else {
        document.getElementById("inpAn5").style.background = "#ff4d4d";
    }

    if (answer6 == texT6) {
        document.getElementById("inpAn6").style.background = "#6ab04c";
    }else {
        document.getElementById("inpAn6").style.background = "#ff4d4d";
    }
}