  function result(){
    var score = 0;

    if(document.getElementById('correct1').checked){
      score++; //1
    }
    if(document.getElementById('correct2').checked){
      score++; //1 //0
    }
    if(document.getElementById('correct3').checked){
      score++; //1 //0
    }
    if(document.getElementById('correct4').checked){
      score++; //1 //0
    }
    if(document.getElementById('correct5').checked){
      score++; //1 //0
    }
    if(document.getElementById('correct6').checked){
      score++; //1 //0
    }
    if(document.getElementById('correct7').checked){
      score++; //1 //0
    }
    if(document.getElementById('correct8').checked){
      score++; //1 //0
    }
    if(document.getElementById('correct9').checked){
      score++; //1 //0
    }
    if(document.getElementById('correct10').checked){
      score++; //1 //0
    }
    // alert("Your Score IS:" + score);
    document.getElementById('Res').innerHTML = "Your Score IS:" + score;
  }