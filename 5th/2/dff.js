
fetch('https://openapt.programming-hero.com/apt/phones?search=iphone')
  .then(response => response.json())
  .then(json => console.log(json))