const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

let tiempo = 0;

function dibujarRama(x, y, largo, angulo, nivel, apertura) {
    if (nivel === 0) return;

    const xFinal = x + largo * Math.cos(angulo);
    const yFinal = y + largo * Math.sin(angulo);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xFinal, yFinal);
    ctx.strokeStyle = "white";
    ctx.lineWidth = nivel * 0.8; //este es el grosor 
    ctx.stroke();

    // es para que se forme la h
    const nuevoLargo = largo * 0.670;

    dibujarRama(xFinal, yFinal, nuevoLargo, angulo - apertura, nivel - 1, apertura);
    dibujarRama(xFinal, yFinal, nuevoLargo, angulo + apertura, nivel - 1, apertura);
}

function animate() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, lienzo.width, lienzo.height);

    // esta es la apertura de los 90 grados
    const apertura = Math.abs(Math.sin(tiempo)) * (Math.PI / 2);

    
    dibujarRama(lienzo.width / 2, 520, 120, -Math.PI / 2, 10, apertura);

    tiempo += 0.015; // Velocidad de la animación
    requestAnimationFrame(animate);
}

animate();