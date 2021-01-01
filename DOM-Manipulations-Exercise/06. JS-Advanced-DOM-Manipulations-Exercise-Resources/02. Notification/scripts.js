function notify(message) {
    let notificationDiv = document.getElementById('notification');
    let paragraph = document.createElement('p');
    
    paragraph.textContent = message;
    notificationDiv.appendChild(paragraph);
    notificationDiv.style.display = 'block';

    setTimeout(() => {
        notificationDiv.style.display = 'none';
    }, 2000);

}
