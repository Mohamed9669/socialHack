const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const fontSize = 16;
const columns = canvas.width / fontSize;

let dropLength = 100; // Longueur de la matrice
let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let drops = [];

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = [];
    createDrops();
});

function createDrops() {
    for (let i = 0; i < columns; i++) {
        drops.push({
            x: i * fontSize,
            y: -dropLength,
            speed: Math.random() + 0.2,
        });
    }
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px monospace`;

    drops.forEach(drop => {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], drop.x, drop.y);

        drop.y += drop.speed;

        if (drop.y > canvas.height) {
            drop.y = -dropLength;
        }
    });

    requestAnimationFrame(draw);
}

createDrops();
draw();
