var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
    console.log("CILCK!!!");
})

var button2 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");


//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength(){
    return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}
//
// function createListElement(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";//clear after input
// }

function addListAfterClick(){
    // console.log("click is working!");
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    // console.log("click is working!");
    if (inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}


button2.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress)
