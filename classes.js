// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  //one();
  two();
  three();
  makeVisible();
  // Your turn! Create a new function called `two`, then call it from here.
}


function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');
    one.classList.toggle('blue')
    //one.classList.add('blue');

  // Next, we apply a new CSS class to it:
  
}

// CREATE FUNCTION two HERE
function two(){
  var two = document.getElementById('two');
  two.classList.add('green');
}
// CREATE FUNCTION three HERE
function three(){
  var three = document.getElementById('three');
  three.classList.add('red');
}
// CREATE FUNCTION makeVisible HERE
function makeVisible(){
  var visInvis = document.getElementsByClassName('invisible')[0];
  visInvis.classList.add('visible');
}


document.getElementById('click1').addEventListener("click", one);
//document.getElementById('click1').onclick = one; OK
/* var x = document.getElementById('click1');
    x.addEventListener('onclick', one); // NOP???
*/
