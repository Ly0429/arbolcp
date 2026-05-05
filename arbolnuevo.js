const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

function dibujarRama(x, y, largo, angulo, nivel) {
    if (nivel === 0) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#55347D";
        ctx.fill();
        return;
    }

    /*
    if (nivel === 0) {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.strokeStyle = "green"; // color del contorno
        ctx.lineWidth = 1; // grosor del círculo
        ctx.stroke(); // ← esto dibuja solo el borde
        return;
    }
    */


    const xFinal = x + largo * Math.cos(angulo);
    const yFinal = y + largo * Math.sin(angulo);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xFinal, yFinal);
    ctx.strokeStyle = "#0A0A0A"; //lo del color
    ctx.lineWidth = nivel;
    ctx.stroke();

    dibujarRama(xFinal, yFinal, largo * 0.75, angulo - 0.5, nivel - 1);
    dibujarRama(xFinal, yFinal, largo * 0.75, angulo + 0.5, nivel - 1);
    dibujarRama(xFinal, yFinal, largo * 0.75, angulo, nivel - 1); //aqui solo se añade la rama en el centro
}

dibujarRama(450, 550, 120, -Math.PI / 2, 11); //aqui es lo de los niveles
