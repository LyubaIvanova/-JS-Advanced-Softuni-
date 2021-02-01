function solve() {
   const [firstPlayerResult, secondPlayerResult] = [document.getElementById('result').children[0], document.getElementById('result').children[2]];
   const history = document.getElementById('history');

   let firstImg;
   let secondImg;
   [...document.images].forEach((card) => {

      card.parentElement.id === 'player1Div' ?
         card.addEventListener('click', upperRowCards) :
         card.addEventListener('click', lowerRowCards);
   });

   function upperRowCards() {
      [this.src, firstPlayerResult.textContent, firstImg] = ["images/whiteCard.jpg", this.name, this];
      if (secondPlayerResult.textContent !== '') {
         winner(firstPlayerResult.textContent, secondPlayerResult.textContent, firstImg, secondImg);
      }
   }

   function lowerRowCards() {
      [this.src, secondPlayerResult.textContent, secondImg] = ["images/whiteCard.jpg", this.name, this];
      if (firstPlayerResult.textContent !== '') {
         winner(firstPlayerResult.textContent, secondPlayerResult.textContent, firstImg, secondImg);
      }
   }

   function winner(firstValue, secondValue, firstImg, secondImg) {

      Number(firstValue) > Number(secondValue) ? [firstImg.style.border, secondImg.style.border] = ["2px solid green", "2px solid red"] : [secondImg.style.border, firstImg.style.border] = ["2px solid green", "2px solid red"];

      history.textContent += `[${firstPlayerResult.textContent} vs ${secondPlayerResult.textContent}] `;
      [firstPlayerResult.textContent, secondPlayerResult.textContent] = ['', ''];
   }
}