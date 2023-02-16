function result(){
    var score = 0;

    if(document.getElementById('checkbox1').checked){
      score++; //1
    }
    if(document.getElementById('checkbox2').checked){
      score++; //1 //0
    }
    if(document.getElementById('checkbox3').checked){
      score++; //1 //0
    }
    if(document.getElementById('checkbox4').checked){
      score++; //1 //0
    }
    if(document.getElementById('checkbox5').checked){
      score++; //1 //0
    }
    if(document.getElementById('checkbox6').checked){
      score++; //1 //0
    }
    if(document.getElementById('checkbox7').checked){
      score++; //1 //0
    }
    if(document.getElementById('checkbox8').checked){
      score++; //1 //0
    }
    if(document.getElementById('checkbox9').checked){
      score++; //1 //0
    }
    if(document.getElementById('checkbox10').checked){
      score++; //1 //0
    }
    // alert("Your Score IS:" + score);
    document.getElementById('Res').innerHTML = "Your Score IS:" + score;
  }