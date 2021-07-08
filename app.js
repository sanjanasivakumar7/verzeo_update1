


//push item to list
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todostatement").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("task").appendChild(li);
  }
  document.getElementById("todostatement").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// get value for priority
let selectedValue = document.getElementById('selectedValue');
selectedValue.addEventListener('click',(e) => {
    let value = e.target.innerText;
    console.log(value);
})


//to change background of Task
let taskValue= document.getElementById('task');
if(selectedValue==Low){
  taskValue.style.backgroundColor=#66E09F;
}
else if(  selectedValue==Medium){
  taskValue.style.backgroundColor=	#FFBF00;
}
else if(selectedValue==High){
  taskValue.style.backgroundColor=#FF410E;
}
