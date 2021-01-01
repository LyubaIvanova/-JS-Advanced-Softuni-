function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener("change", validateInput);

    function validateInput() {

        const input = inputField.value;
        const validatorRegex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

        if (!input.match(validatorRegex)) {

            inputField.setAttribute('class', 'error');

        } else {

            inputField.removeAttribute('class');
        }
    }
}