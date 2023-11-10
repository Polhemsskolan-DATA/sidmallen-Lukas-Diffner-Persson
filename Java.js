// Author: Lukas Diffner-Persson EEDAT2
document.getElementById("Punch").onclick = function() {
window.open("bilder/punch.jpg", "", "width=500px,height=500");
}

function text1() {
    document.getElementById('bibel').style.display = 'block';
    document.getElementById('btn1').style.display = 'none';
    document.getElementById('btn2').style.display = 'inline-block';
  }

  function text2() {
    document.getElementById('bibel').style.display = 'none';
    document.getElementById('btn1').style.display = 'inline-block';
    document.getElementById('btn2').style.display = 'none';
  }
