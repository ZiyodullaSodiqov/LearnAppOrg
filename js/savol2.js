var Stext1 = "225 azimut bilan janubi-g’arbiy yo’nalish  ";
var Stext2 = "900  azimut bilan, sharqiy yo’nalish";
var Stext3 = "shimol";
var Stext4 = "3000 azimut";
var Stext5 = "shimoli-g’arb";
var Stext6 = "1800 azimut burchagi";
var Stext7 = "Janub ";
var Stext8 = "1350 azimut, janubi-sharqiy yo’nalish";

function tek(){
    var inp_one = document.getElementById('TextM1');
    var input_two = document.getElementById('TextM2');
    var inp_three = document.getElementById('TextM3');
    var inp_four = document.getElementById('TextM4');
    var inp_five = document.getElementById('TextM5');
    var inp_six = document.getElementById('TextM6');
    var inp_seven = document.getElementById('TextM7');
    var inp_eight = document.getElementById('TextM8');

    if(inp_one.value == Stext1){
        inp_one.style.backgroundColor = "#6ab04c";
    }else{
        inp_one.style.backgroundColor = "#ff4d4d";
    }

    if(input_two.value == Stext2){
        input_two.style.backgroundColor = " #6ab04c";
    }else{
        input_two.style.backgroundColor = "#ff4d4d";
    }

    if(inp_three.value == Stext3){
        inp_three.style.backgroundColor = " #6ab04c";
    }else{
        inp_three.style.backgroundColor = "#ff4d4d";
    }

    if(inp_four.value == Stext4){
        inp_four.style.backgroundColor = " #6ab04c";
    }else{
        inp_four.style.backgroundColor = "#ff4d4d";
    }

    if(inp_five.value == Stext5){
        inp_five.style.backgroundColor = " #6ab04c";
    }else{
        inp_five.style.backgroundColor = "#ff4d4d";
    }

    if(inp_six.value == Stext6){
        inp_six.style.backgroundColor = " #6ab04c";
    }else{
        inp_six.style.backgroundColor = "#ff4d4d";
    }

    if(inp_seven.value == Stext7){
        inp_seven.style.backgroundColor = " #6ab04c";
    }else{
        inp_seven.style.backgroundColor = "#ff4d4d";
    }

    if(inp_eight.value == Stext8){
        inp_eight.style.backgroundColor = " #6ab04c";
    }else{
        inp_eight.style.backgroundColor = "#ff4d4d";
    }

}