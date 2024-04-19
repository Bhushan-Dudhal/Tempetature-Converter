function CONVERT1() {
  var f = document.getElementById("inp1").value;

  var c = (5 / 9) * (f - 32);

  document.getElementById("inp2").value = c;
}

function CONVERT2() {
  var e = document.getElementById("inp3").value;

  d = (e * 9) / 5 + 32;

  document.getElementById("inp4").value = d;
}
