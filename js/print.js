function imprimirAula() {
  const conteudo = document.querySelector("body").cloneNode(true);

  // Limpeza do que não deve ir pra impressão
  conteudo.querySelector('#theme-toggle')?.remove();
  conteudo.querySelector('#print-button')?.remove();
  conteudo.querySelector('.video-container')?.remove();

  // Criar área do QR Code
  const qrDiv = document.createElement("div");
  qrDiv.innerHTML = `
    <div class="divider"></div>
    <h2>Assista ao vídeo desta aula</h2>
    <canvas id="qrcode" width="160" height="160"></canvas>
  `;
  conteudo.appendChild(qrDiv);

  // Abrir nova aba com layout para impressão
  const win = window.open("", "_blank");
  win.document.write(`
    <html>
    <head>
      <title>Impressão da Aula</title>
      <link rel="stylesheet" href="../css/print.css">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    </head>
    <body>${conteudo.innerHTML}</body>
    </html>
  `);
  win.document.close();

  win.onload = () => {
    new QRious({
      element: win.document.getElementById("qrcode"),
      value: "https://www.youtube.com/watch?v=9xOqf7P6jYQ",
      size: 160
    });
    win.focus();
    win.print();
  };
}
