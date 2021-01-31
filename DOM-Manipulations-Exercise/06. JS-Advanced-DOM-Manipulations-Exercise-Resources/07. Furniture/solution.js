function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');   
  const [input, output] = document.querySelectorAll('textarea');
  generateBtn.addEventListener('click', generateRows);

  function generateRows() {
    let products = JSON.parse(input.value);
    products.forEach((product) => {
      let {
        name,
        img,
        price,
        decFactor
      } = product;
      let htmlString = `<tr>\n
      <td><img src="${img}"></td>\n
      <td><p>${name}</p></td>\n
    <td><p>${price}</p></td>\n
    <td><p>${decFactor}</p></td>\n
    <td><input type="checkbox" /></td>\n
    </tr>`;
      document.querySelector('tbody').insertAdjacentHTML('beforeend', htmlString);
    });
  }
  buyBtn.addEventListener('click', printOutput);

  function printOutput() {
    let [products, prices, factors] = [
      [],
      [],
      []
    ];
    [...document.querySelectorAll('tbody tr')].forEach((tr) => {
      if (tr.querySelectorAll('input')[0].checked) {
        let data = tr.querySelectorAll('p');
        products.push(data[0].textContent);
        prices.push(Number(data[1].textContent));
        factors.push(Number(data[2].textContent));
      }
    });

    let totalPrice = prices.reduce((sum, num) => sum + num);
    let avgFactor = factors.reduce((sum, num) => (sum + num)) / factors.length;
    output.textContent = `Bought furniture: ${products.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgFactor}`;
  }
}
