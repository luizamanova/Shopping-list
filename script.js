
var text = document.querySelector('input');
var btn = document.querySelector('button');
var ulist = document.querySelector('ul');

btn.onclick = function(){
   let shoppingItem = text.value;
   text.value='';


var list = document.createElement('li');
var span = document.createElement('span');
var button = document.createElement('button');
button.setAttribute("class","delete")

list.appendChild(span);
list.appendChild(button);
span.textContent = shoppingItem;
button.textContent = '';
ulist.appendChild(list);

   
button.onclick = function(){
    list.remove();
}
text.focus();
}
text.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     btn.click();
    }
  });

/*const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
}
*/