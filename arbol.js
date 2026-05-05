const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

function dibujarRama(x, y, largo, angulo, nivel) {
    if (nivel === 0) {
        return;
    }

    const xFinal = x + largo * Math.cos(angulo);
    const yFinal = y + largo * Math.sin(angulo);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xFinal, yFinal);
    ctx.strokeStyle = "#2b5c2b";
    ctx.lineWidth = nivel;
    ctx.stroke();

    dibujarRama(xFinal, yFinal, largo * 0.75, angulo - 0.5, nivel - 1);
    dibujarRama(xFinal, yFinal, largo * 0.75, angulo + 0.5, nivel - 1);
}

dibujarRama(450, 550, 120, -Math.PI / 2, 10);
