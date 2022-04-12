function secti() {
    let prvni = Math.floor(parseFloat(document.querySelector('input[name="prvni"]').value));
    let druhe = Math.floor(parseFloat(document.querySelector('input[name="druhe"]').value));

    console.log( matematika(prvni,druhe));
}

function matematika(prvni, druhe) {
  let vysl = prvni + druhe;
  return vysl;
}


function vypisVysledek(vysl) {
    document.querySelector('#vysledek > span').innerHTML = vysl;
}

function secti() {
    let prvni = Math.floor(parseFloat(document.querySelector('input[name="prvni"]').value));
    let druhe = Math.floor(parseFloat(document.querySelector('input[name="druhe"]').value));
    let vysl = matematika(prvni,druhe);
    vypisVysledek(vysl);
}


document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', secti);
});


