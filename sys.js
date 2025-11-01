letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function randomArray(p) {
  if (p != "") {
    a = p;
    k = p.length;
    return p[parseInt(Math.random() * k)];
  } else {
    return "";
  }
}

function settings() {
  document.querySelector(".settings").classList.toggle("inv");
}

function history() {
  document.querySelector(".history").classList.toggle("inv");
}

function findlist(a, b) {
  if (b[a] === "A" || b[a] === "a") {
    return listA;
  }

  if (b[a] === "B" || b[a] === "b") {
    return listB;
  }

  if (b[a] === "C" || b[a] === "c") {
    return listC;
  }

  if (b[a] === "D" || b[a] === "d") {
    return listD;
  }

  if (b[a] === "E" || b[a] === "e") {
    return listE;
  }
  if (b[a] === "-" || b[a] === "-") {
    return "";
  }
}
function CreateName() {
  var name = "";
  randomm = document.querySelector("#random").value;
  
numname = parseInt(document.querySelector("#numname").value);
  min = parseInt(document.querySelector("#min").value);
  max = parseInt(document.querySelector("#max").value);

  listA = document.querySelector("#listA").value.split("");
  listB = document.querySelector("#listB").value.split("");
  listC = document.querySelector("#listC").value.split("");
  listD = document.querySelector("#listD").value.split("");
  listE = document.querySelector("#listE").value.split("");

  sampleA = document.querySelector("#sampleA").value.split("");
  probA = parseInt(document.querySelector("#weightA").value);
  sampleB = document.querySelector("#sampleB").value.split("");
  probB = parseInt(document.querySelector("#weightB").value);
  sampleC = document.querySelector("#sampleC").value.split("");
  probC = parseInt(document.querySelector("#weightC").value);
  sampleD = document.querySelector("#sampleD").value.split("");
  probD = parseInt(document.querySelector("#weightD").value);
  sampleE = document.querySelector("#sampleE").value.split("");
  probE = parseInt(document.querySelector("#weightE").value);

  no = min + parseInt(Math.random() * (max - min));
for (let ii = 0; ii < numname; ii++) {

  for (let i = 0; i < no; i++) {
    aa = probA + probB + probC + probD + probE;
    nu = parseInt(Math.random() * aa);

    if ((nu >= 0) & (nu < probA)) {
      za = findlist(0, sampleA);
      zb = findlist(1, sampleA);
      zc = findlist(2, sampleA);

      name += randomArray(za) + randomArray(zb) + randomArray(zc);
    }

    if ((nu >= probA) & (nu < probA + probB)) {
      za = findlist(0, sampleB);
      zb = findlist(1, sampleB);
      zc = findlist(2, sampleB);

      name += randomArray(za) + randomArray(zb) + randomArray(zc);
    }

    if ((nu >= probA + probB) & (nu < probA + probB + probC)) {
      za = findlist(0, sampleC);
      zb = findlist(1, sampleC);
      zc = findlist(2, sampleC);

      name += randomArray(za) + randomArray(zb) + randomArray(zc);
    }

    if (
      (nu >= probA + probB + probC + probD) &
      (nu < probA + probB + probD + probE)
    ) {
      za = findlist(0, sampleD);
      zb = findlist(1, sampleD);
      zc = findlist(2, sampleD);

      name += randomArray(za) + randomArray(zb) + randomArray(zc);
    }

    if (nu >= probA + probB + probD + probE) {
      za = findlist(0, sampleE);
      zb = findlist(1, sampleE);
      zc = findlist(2, sampleE);

      name += randomArray(za) + randomArray(zb) + randomArray(zc);
    }
  }

  name += " "
  
}

  c1 = 359;
  c2 = 100;
  c3 = 50;
  clr =
    "hsl(" +
    parseInt(Math.random() * c1) +
    ", " +
    parseInt(Math.random() * c2) +
    "%, " +
    parseInt(Math.random() * c3) +
    "%)";

  name = name.toLowerCase();

  phrase = "Olá! Eu sou";

  document.getElementById("namebox").innerHTML = name;
  document.getElementById("intro").style.backgroundColor = clr;

  document.getElementById("history").innerHTML =
    " <li class='a" +
    Date.now() +
    "'><div class='mininame'>  <div> <h3 style='background-color:" +
    clr +
    ";'>  " +
    phrase +
    "</h3>  <h1> " +
    name +
    " </h1> </div>  </div>       <button onclick='love(" +
    Date.now().toString() +
    ")'><img src='img/icons8_love_127px.png'></button></li>" +
    document.getElementById("history").innerHTML;

  return name;
}

function love(param) {
  div = document.querySelector(".a" + param);
  console.log(div);

  document.getElementById("fav").innerHTML =
    div.innerHTML + document.getElementById("fav").innerHTML;

  document.querySelector("#fav").querySelector("button").remove();
  document
    .querySelector("#fav")
    .querySelector("div")
    .classList.add("b" + param);
  document.querySelector("#fav").querySelector("div").innerHTML +=
    "<button onclick='unlove(" +
    param +
    ")'><img src='img/icons8_unlove_127px.png'></button> <br>";
}

function unlove(param) {
  document.querySelector(".b" + param).remove();
}
/*

A
BA
BRA 
BAR





*/
