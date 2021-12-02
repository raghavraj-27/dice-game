function refresh() {
    var p1 = Math.random() * 6; 
    p1 = Math.floor(p1) + 1;

    var p2 = Math.random() * 6; 
    p2 = Math.floor(p2) + 1;

    document.querySelector('.img1').setAttribute("src", "./images/dice" + p1 + ".png");
    document.querySelector('.img2').setAttribute("src", "./images/dice" + p2 + ".png");

    if(p1 > p2) {
      document.getElementById("p1").innerHTML += " Wins !";
      document.getElementById("p2").innerHTML += " Lose !";
    } else if(p1 < p2) {
      document.getElementById("p1").innerHTML += " Lose !";
      document.getElementById("p2").innerHTML += " Wins !";
    } else {
      document.getElementById("p1").innerHTML = "      Match tie !";
      document.getElementById("p2").innerHTML = " ";
    }
  }
