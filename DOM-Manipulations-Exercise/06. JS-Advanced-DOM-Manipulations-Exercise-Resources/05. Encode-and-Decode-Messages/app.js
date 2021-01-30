function encodeAndDecodeMessages() {
    const [sendButton, decodeButton] = document.querySelectorAll('button');   //taking the buttons right away with destructuring;
    const [senderField, recieverField] = document.querySelectorAll('textarea');  

    sendButton.addEventListener('click', encodeAndSend);
    decodeButton.addEventListener('click', receiveAndDecode);

    function encodeAndSend() {
        const message = senderField.value
            .split('')
            .map((char) => char.charCodeAt() + 1)    //using charCodeAt() without an index;
            .map((char) => String.fromCharCode(char))
            .join('');

        recieverField.value = message;
        senderField.value = '';
    }

    function receiveAndDecode() {
        const message = recieverField.value
            .split('')
            .map((char) => char.charCodeAt() - 1)
            .map((char) => String.fromCharCode(char))
            .join('');

        recieverField.value = message;
    }
}