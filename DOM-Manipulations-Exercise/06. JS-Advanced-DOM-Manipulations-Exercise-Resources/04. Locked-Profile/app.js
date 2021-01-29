function lockedProfile() {

    [...document.querySelectorAll('button')].forEach(b => b.addEventListener('click', showHidden));

    function showHidden() {
        const parent = this.parentElement;
        const unlock = parent.querySelector('input[value="unlock"]');
        const hiddenSection = parent.querySelector('div');
        
        if(!unlock.checked){
            return;
        }
        if (this.textContent === 'Hide it') {
            hiddenSection.style.display = 'none';
            this.textContent = 'Show more';
        } else {
            hiddenSection.style.display = 'inline-block';
            this.textContent = 'Hide it';
        }
    }
}