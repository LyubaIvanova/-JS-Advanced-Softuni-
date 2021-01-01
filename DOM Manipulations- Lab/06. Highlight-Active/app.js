function focus() {

    const inputs = [...document.querySelectorAll('input[type="text"]')];
    inputs.forEach(i => i.addEventListener('focus', setFocus));

    function setFocus(e) {
        e.target.parentElement.setAttribute('class', 'focused');        
        e.target.addEventListener('blur', removeClass);
    }

    function removeClass(e) {
        e.target.parentElement.removeAttribute('class');
    }
}