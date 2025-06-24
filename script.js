//<3

const closeButton = document.getElementById('CloseWindow');
closeButton.onclick = resetCounter;

function resetCounter() {
    res.innerHTML = "0";
}

// End of line

const increaser = document.getElementById('buttonPlus');
const decreaser = document.getElementById('buttonMinus');

const res = document.getElementById('res');

increaser.addEventListener("click", () => {
    res.textContent++
}
);

decreaser.addEventListener("click", () => {
    res.textContent--
}
);

// End of line

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

increaser.onclick = heartNormal;
decreaser.onclick = heartBreak;

function heartNormal() {
    image1.style.display = "block";
    image2.style.display = "none";
}

function heartBreak() {
    image1.style.display = "none";
    image2.style.display = "block";
}

// End of line
