function create(words) {
   const contentDiv = document.getElementById('content');

   for (let word of words) {

      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';
      divElement.appendChild(paragraph);

      divElement.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
      });
      contentDiv.appendChild(divElement);
   }
}