var add = document.getElementById("more");
var sub = document.getElementById("less");
var reset = document.getElementById("reset");
var number = document.getElementById("display");
var count = 0;



//funzione che al click del pulsante + aggiunge 1 al counter
add.onclick = function(){
  count += 1;
  number.innerHTML = count;
  if(count>0){
    number.style.backgroundColor = "red";
  }
  if(count==0){
    number.style.backgroundColor = "black";
  }
};
//funzione che al click del pulsante - toglie 1 al counter
sub.onclick = function(){
  count -= 1;
  number.innerHTML = count;
  if(count<0){
    number.style.backgroundColor = "blue";
  }
  if(count==0){
    number.style.backgroundColor = "black";
  }
};
//funzione che al click del pulsante "Reset" resetta il counter
reset.onclick = function(){
  count = 0;
  number.innerHTML = count;
  if(count==0){
    number.style.backgroundColor = "black";
  }
};
