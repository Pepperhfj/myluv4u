const increaser = document.getElementById('buttonPlus');
const decreaser = document.getElementById('buttonMinus');

const res = document.getElementById('res');

increaser.addEventListener("click", () => 
{res.textContent++});

decreaser.addEventListener("click", () => 
{res.textContent--});