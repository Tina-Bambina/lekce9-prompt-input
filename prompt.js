console.log('fd');

let sirka = prompt('Zadej sirku pracky v cm', 1);
let vyska = prompt('Zadej vysku pracky v cm', 1);
let hloubka = prompt('Zadej hloubku pracky v cm', 1);


let misnostSirka = 62;
let mistnostVyska = 70;
let mistnostHloubka = 80;

if (sirka<=misnostSirka && vyska<=mistnostVyska && hloubka<=mistnostHloubka)
    alert(`Pracka o sirce ${sirka}, vysce ${vyska} a hloubce ${hloubka} se nam domu vejde`);

else 
    alert(`Pracka se nam domu nevejde :(`);


