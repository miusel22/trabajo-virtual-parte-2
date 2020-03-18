const button = document.getElementById('start');
button.addEventListener('click', () => document.querySelector('ul').innerHTML = '<li onclick="li1()">Inception</li><li onclick="li2()">The butterfly effect</li><li onclick="li3()">Eternal sunshine of the spotless mind</li><li onclick="li4()">Blue velvet</li><li onclick="li5()">Split</li>'
 );


 function li1 () {
   
    document.getElementById('movie').innerHTML = "Inception";
    console.log("Inception");
  }

 function li2 () {
   
    document.getElementById('movie').innerHTML = "The butterfly effect";
    console.log("The butterfly effect");
  }

function li3 () {
   
    document.getElementById('movie').innerHTML = "Eternal sunshine of the spotless mind";
    console.log("Eternal sunshine of the spotless mind");
  }

function li4 () {
   
    document.getElementById('movie').innerHTML = "Blue velvet";
    console.log("Blue velvet");
  }

function li5 () {
   
    document.getElementById('movie').innerHTML = "Split";
    console.log("Split");
  }