var Stext1 = "Quyosh";
var Stext2 = "1,37x1024";
var Stext3 = "Quyosh radiatsiyasi";
var Stext4 = "97 %";
var Stext5 = "Quyosh doimiyligi";
var Stext6 = "Tarqoq";
var Stext7 = "To'g'ri";
var Stext8 = "Yalpi";

function sav(){
    var inp_one = document.getElementById('btn-text1');
    var inp_two = document.getElementById('btn-text2');
    var inp_three = document.getElementById('btn-text3');
    var inp_four = document.getElementById('btn-text4');
    var inp_five = document.getElementById('btn-text5');
    var inp_six = document.getElementById('btn-text6');
    var inp_seven = document.getElementById('btn-text7');
    var inp_eight = document.getElementById('btn-text8');

    if(inp_one.value == Stext1){
        inp_one.style.backgroundColor = "#6ab04c";
    }else{
        inp_one.style.backgroundColor = "#ff4d4d";
    }

    if(inp_two.value == Stext2){
        inp_two.style.backgroundColor = " #6ab04c";
    }else{
        inp_two.style.backgroundColor = "#ff4d4d";
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