let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: '9xOqf7P6jYQ'
  });
}

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
  span.classList.toggle('hidden-text');
}
