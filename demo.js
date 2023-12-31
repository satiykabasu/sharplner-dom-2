let formElement=document.getElementById('addForm');
let itemList=document.getElementById('items');

//ADD ITEM TO NEW LI

formElement.addEventListener('submit',addItem);
function addItem(e){
  e.preventDefault();
  let getValue=document.getElementById('item').value;
  console.log(getValue);
  let newLi=document.createElement('li');
  newLi.className='list-group-item';
  newLi.appendChild(document.createTextNode(getValue));
  let newDelete=document.createElement('button');
  newDelete.className='btn btn-danger btn-sm float-right delete';
  childDelete=document.createTextNode('X');
  newDelete.appendChild(childDelete);
  newLi.appendChild(newDelete);
  itemList.appendChild(newLi);

}

// REMOVE ITEM 

itemList.addEventListener('click',removeItem);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm("are you sure to remove this ?")){
      let removeLi=e.target.parentElement;//parent is li
      itemList.removeChild(removeLi);

    }
  }
}


//filter item

var itemList = document.getElementById('items');
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}