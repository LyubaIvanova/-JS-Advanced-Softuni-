function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onSearch);
   const input = document.querySelector('#searchField');

   function onSearch() {

      const query = input.value.trim().toLocaleLowerCase();

      if (query.trim().length > 0) {

         const tbody = document.querySelector('tbody');
         [...tbody.querySelectorAll('tr')].forEach(r => {
            r.classList.remove('select')
         });

         [...tbody.querySelectorAll('td')].forEach(d => {
            if (d.textContent.trim().toLocaleLowerCase().includes(query)) {

               d.parentNode.classList.add('select');
            }
         });
         input.value = '';
      }
   }
}