/// background change



function changeBg(param) {

    let wedbg =  document.getElementById('wedBG');
  
    if(param == "style1") {
      wedbg.style.backgroundImage = 'url("./style1.jpg")';
      
    }
  
    if(param == "style2") {
      wedbg.style.backgroundImage = 'url("./style2.jpg")';
    }
  
    if(param == "style3") {
      wedbg.style.backgroundImage = 'url("./style3.jpg")';
    }
  }





/// live text

function getNameA() {
  var namA = document.getElementById('name1').value;
  document.getElementById("input").innerText = "" + namA;
}

function getNameB() {
  var namB = document.getElementById('name2').value;
  document.getElementById("input1").innerHTML = "" + namB + "";
}

function getDate() {
  var date = document.getElementById('date').value;
  document.getElementById("input2").innerHTML = "" + date;
  ;   
}

function getVenue() {
  var venue = document.getElementById('venue').value;
  document.getElementById("input3").innerHTML = "" + venue + "";
}


/////
