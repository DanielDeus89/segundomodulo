let currentIndex = 0;
let isDevMode = false;

function toggleDevMode() {
  const checkbox = document.getElementById("devCheckbox");
  isDevMode = checkbox ? checkbox.checked : false;
  renderLessonContent();
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderLessonContent();
  }
}

function nextCard() {
  if (!isDevMode) return;

  if (currentIndex < lessonCards.length - 1) {
    currentIndex++;
    renderLessonContent();
  }
}

function back5Seconds() {
  if (typeof player !== "undefined" && player && typeof player.getCurrentTime === "function") {
    const currentTime = player.getCurrentTime();
    const newTime = Math.max(0, currentTime - 5);
    player.seekTo(newTime, true);
  }
}

function toggleText(button) {
  const card = button.closest(".listening-card");
  if (!card) return;

  const isNowVisible = card.classList.toggle("show-text");
  button.textContent = isNowVisible ? "🙈 Ocultar" : "👁️ Exibir";
}

function createTitle(card) {
  const h2 = document.createElement("h2");
  h2.className = "section-title";
  h2.style.display = "flex";
  h2.style.justifyContent = "space-between";
  h2.style.alignItems = "center";
  h2.style.gap = "10px";
  h2.style.flexWrap = "wrap";

  const titleSpan = document.createElement("span");
  titleSpan.textContent = card.title || "Sem título";
  titleSpan.style.flex = "1";

  const playPauseBtn = document.createElement("button");
  playPauseBtn.textContent = "▶️";
  playPauseBtn.style.background = "#111";
  playPauseBtn.style.color = "#fff";
  playPauseBtn.style.border = "none";
  playPauseBtn.style.borderRadius = "6px";
  playPauseBtn.style.padding = "6px 10px";
  playPauseBtn.style.cursor = "pointer";
  playPauseBtn.style.fontSize = "14px";


  h2.appendChild(titleSpan);
  h2.appendChild(playPauseBtn);

  return h2;
}

function createListeningContent(card) {
  const row = document.createElement("div");
  row.className = "listening-row";

  card.segments.forEach((segment) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "listening-card";

    const playBtn = document.createElement("button");
    playBtn.textContent = "▶️ Ouvir";
    playBtn.onclick = () => {
      if (typeof playSegment === "function") {
        playSegment(segment.start, segment.end);
      }
    };

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "👁️ Exibir";
    toggleBtn.onclick = function () {
      toggleText(this);
    };

    const span = document.createElement("span");
    span.className = "hidden-text";
    span.textContent = segment.text || "";

    cardDiv.appendChild(playBtn);
    cardDiv.appendChild(toggleBtn);
    cardDiv.appendChild(span);

    row.appendChild(cardDiv);
  });

  return row;
}

function createNormalContent(card) {
  const grid = document.createElement("div");
  grid.className = "grid2";

  if (!Array.isArray(card.columns)) return grid;

  card.columns.forEach((colData) => {
    const col = document.createElement("div");
    col.className = "vocab-col";

    colData.forEach(([en, pt]) => {
      const p = document.createElement("p");
      p.innerHTML = `<span class="text-blue">${en}</span><br><span class="text-white">${pt}</span>`;
      col.appendChild(p);
    });

    grid.appendChild(col);
  });

  return grid;
}

function createBottomControls() {
  const controls = document.createElement("div");
  controls.style.display = "flex";
  controls.style.justifyContent = "center";
  controls.style.gap = "10px";
  controls.style.flexWrap = "wrap";
  controls.style.marginTop = "20px";

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "⬅️ Anterior";
  prevBtn.disabled = currentIndex === 0;
  prevBtn.onclick = prevCard;

  const backBtn = document.createElement("button");
  backBtn.textContent = "⏪ Voltar 5s";
  backBtn.onclick = back5Seconds;

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Próximo ➡️";
  nextBtn.disabled = !isDevMode || currentIndex === lessonCards.length - 1;
  nextBtn.onclick = nextCard;

  [prevBtn, backBtn, nextBtn].forEach((btn) => {
    btn.style.background = "#111";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.padding = "8px 12px";
    btn.style.cursor = btn.disabled ? "not-allowed" : "pointer";
    btn.style.opacity = btn.disabled ? "0.5" : "1";
  });

  controls.appendChild(prevBtn);
  controls.appendChild(backBtn);
  controls.appendChild(nextBtn);

  return controls;
}

function renderLessonContent() {
  document.getElementById("lessonTitle").textContent = lessonTitle;
  const stack = document.querySelector(".card-stack");
  if (!stack) return;

  stack.innerHTML = "";

  const card = lessonCards[currentIndex];
  if (!card) return;

  const div = document.createElement("div");
  div.className = "card active";

  div.appendChild(createTitle(card));

  if (card.type === "listening" && Array.isArray(card.segments)) {
    div.appendChild(createListeningContent(card));
  } else {
    div.appendChild(createNormalContent(card));
  }

  div.appendChild(createBottomControls());
  stack.appendChild(div);
}

window.onload = () => {
  renderLessonContent();
};