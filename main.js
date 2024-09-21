console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
const canvas = document.getElementById('caminhao');
const ctx = canvas.getContext('2d');

// Corpo do caminhão
ctx.fillStyle = 'blue';
ctx.fillRect(100, 150, 300, 100); // (x, y, largura, altura)

// Cabine do caminhão
ctx.fillStyle = 'darkblue';
ctx.fillRect(300, 100, 100, 70); // (x, y, largura, altura)

// Roda traseira
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(150, 260, 30, 0, Math.PI * 2); // (x, y, raio, startAngle, endAngle)
ctx.fill();

// Roda dianteira
ctx.beginPath();
ctx.arc(350, 260, 30, 0, Math.PI * 2);
ctx.fill();

// Janelas da cabine
ctx.fillStyle = 'lightblue';
ctx.fillRect(320, 110, 60, 40); // (x, y, largura, altura)

// Detalhes do caminhão
ctx.fillStyle = 'white';
ctx.fillRect(250, 160, 20, 20); // (x, y, largura, altura) - farol

ctx.fillStyle = 'yellow';
ctx.fillRect(220, 160, 20, 20); // (x, y, largura, altura) - farol