
const divRes = document.createElement("div");
const btnRemove = document.createElement("button");
const btnAdd = document.createElement("button");
const btnReset = document.createElement("button");

divRes.setAttribute("id","display");
btnRemove.setAttribute("id","less");
btnAdd.setAttribute("id","more");
btnReset.setAttribute("id","reset");

divRes.innerHTML = 0;
btnRemove.innerHTML = "-";
btnAdd.innerHTML = "+";
btnReset.innerHTML = "Reset";

document.getElementById("contain").appendChild(divRes);
document.getElementById("contain").appendChild(btnRemove);
document.getElementById("contain").appendChild(btnAdd);
document.getElementById("contain").appendChild(btnReset);

var count = 0;

//funzione che al click del pulsante + aggiunge 1 al counter
btnAdd.onclick = function(){
  count += 1;
  divRes.innerHTML = count;
  if(count>0){
    divRes.style.backgroundColor = "red";
  }
  if(count==0){
    divRes.style.backgroundColor = "black";
  }
};

//funzione che al click del pulsante - toglie 1 al counter
btnRemove.onclick = function(){
  count -= 1;
  divRes.innerHTML = count;
  if(count<0){
    divRes.style.backgroundColor = "blue";
  }
  if(count==0){
    divRes.style.backgroundColor = "black";
  }
};

//funzione che al click del pulsante "Reset" resetta il counter
btnReset.onclick = function(){
  count = 0;
  divRes.innerHTML = count;
  if(count==0){
    divRes.style.backgroundColor = "black";
  }
};
