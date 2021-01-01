function addItem() {

    let itemsList = document.getElementById('items');
    let newLi = document.createElement('li');
    let inputValue = document.getElementById('newItemText');
    newLi.innerHTML = inputValue.value;

    itemsList.appendChild(newLi);
    inputValue.value = '';
}