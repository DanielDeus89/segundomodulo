let player; // variável global usada pela função no HTML

function playSegment(start, end) {
  const button = event.target.closest('button') || event.target;
  if (player && player.seekTo) {
    player.seekTo(start);
    player.playVideo();
    const originalText = button.textContent;
    button.textContent = '⏸️ Tocando...';
    button.disabled = true;
    setTimeout(() => {
      player.pauseVideo();
      button.textContent = originalText;
      button.disabled = false;
    }, (end - start) * 1000);
  } else {
    alert("O player ainda não está pronto. Tente novamente em alguns segundos.");
  }
}

function playFromData(el) {
  const start = parseFloat(el.dataset.start);
  const end = parseFloat(el.dataset.end);
  if (!isNaN(start) && !isNaN(end)) {
    player.seekTo(start);
    player.playVideo();
    el.classList.add('playing');
    setTimeout(() => {
      player.pauseVideo();
      el.classList.remove('playing');
    }, (end - start) * 1000);
  }
}

function toggleText(button) {
  const span = button.nextElementSibling;
  if (span.classList.contains('hidden-text')) {
    span.classList.remove('hidden-text');
    button.textContent = '🙈 Ocultar';
  } else {
    span.classList.add('hidden-text');
    button.textContent = '👁️ Exibir';
  }
}
