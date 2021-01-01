function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
  const result = document.getElementById('result');

  gradient.addEventListener('mousemove', displayGradient);

  function calculatePercentage(x, y) {
      return Math.floor(x / y * 100);
  }

  function resultDivTemplateString(o) {
      return `${o}%`;
  }

  function displayGradient(e) {
      const clickPoint = e.offsetX;

      //In Judge the width is calculated with 300, if not -> use for width [gradient.offsetWidth]
      const elWidth = 300;
      const percent = calculatePercentage(clickPoint, elWidth);

      result.textContent = resultDivTemplateString(percent);
  }
}