var ftt = `<footer>
<div class="container">
    <div class="row">
        <div class="col-4">
            <h1 style="color: #fff; transform: translateY(50px);">
                Learning App
            </h1>
            <a href="./Logo.png"><img src="./Logo.png" id="Logo" alt="Logo"></a>
        </div>
        <div class="col-4 ft">
            <li><h3 style="color: #fff;">Links</h3></li>
            <li><a href="#">Uy</a></li>
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Biz bilan bog'lanish</a></li>
            <li><a href="#">Loyihalarimiz</a></li>
        </div>
        <div class="col-4 ft">
            <li><h3 style="color: #fff;">Manzil</h3></li>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.1337273768953!2d65.77147408025513!3d38.855459262157964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea742f8bce46d%3A0x1b2891d798befdae!2sQilichbek%20Q%C3%B2r%C4%A3oncha%20mahalla!5e1!3m2!1sru!2s!4v1674298986282!5m2!1sru!2s" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</div>
</footer>`;
document.getElementById('mbn').innerHTML = ftt;
var fgh = ` <div class="one_footer">
<div class="container">
    <div class="row">
        <div class="col-6">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li style="list-style: none;" class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li style="list-style: none;" class="page-item"><a class="page-link" href="#">1</a></li>
                  <li style="list-style: none;" class="page-item"><a class="page-link" href="#">2</a></li>
                  <li style="list-style: none;" class="page-item"><a class="page-link" href="#">3</a></li>
                  <li style="list-style: none;" class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
        </div>
    </div>
</div>
</div>`
document.getElementById('onefooter').innerHTML = fgh;

  function result(){
    var score = 0;

    if(document.getElementById('correct1').checked){
      score++; //1
    }
    if(document.getElementById('correct2').checked){
      score++; //1 //0
    }
    alert("Your Score IS:" + score);
  }