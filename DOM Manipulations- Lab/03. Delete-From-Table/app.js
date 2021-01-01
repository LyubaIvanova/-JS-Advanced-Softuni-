function deleteByEmail() {
    let result = document.getElementById('result');

    let input = document.querySelector('input');

    const rows = [...document.querySelectorAll('tbody > tr > td:last-child')];

    const row = rows.find(x => x.textContent === input.value);

    if (row) {

        row.parentElement.remove();
        result.textContent = 'Deleted.';

    } else {

        result.textContent = 'Not found.';
    }
    input.value = '';
}