function addItem() {
    let parentUl = document.getElementById('items');
    let newLiEl = document.createElement('li');
    let inputField = document.getElementById('newText');

    let liText = document.createTextNode(`${inputField.value} `);

    let link = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    link.appendChild(linkText);
    link.setAttribute('href', '#');

    newLiEl.appendChild(liText);
    newLiEl.appendChild(link);

    parentUl.addEventListener('click', deleteElement);
    parentUl.appendChild(newLiEl);
    inputField.value = '';

    function deleteElement(e) {
        this.removeChild(e.target.parentElement);
    }
}
