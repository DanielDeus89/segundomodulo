let currentIndex = 0;
let isDevMode = false;

function toggleDevMode() {
  isDevMode = document.getElementById('devCheckbox').checked;
  document.getElementById("nextBtn").disabled = !isDevMode;
}

function loadCards(cardsData) {
  const mainStack = document.querySelector(".card-stack");
  const miniStack = document.querySelector(".minicard-stack");
  mainStack.innerHTML = "";
  miniStack.innerHTML = "";

  cardsData.forEach((card, idx) => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.index = idx;

    const grid = document.createElement("div");
    grid.className = "grid2";

    card.forEach(column => {
      const colDiv = document.createElement("div");
      colDiv.className = "vocab-col";

      column.forEach(pair => {
        const p = document.createElement("p");

        const spanEng = document.createElement("span");
        spanEng.className = "text-blue";
        spanEng.textContent = pair.en;

        const br = document.createElement("br");

        const spanPt = document.createElement("span");
        spanPt.className = "text-white";
        spanPt.textContent = pair.pt;

        p.appendChild(spanEng);
        p.appendChild(br);
        p.appendChild(spanPt);
        colDiv.appendChild(p);
      });

      grid.appendChild(colDiv);
    });

    div.appendChild(grid);

    if (idx === 0) {
      div.classList.add("active");
      mainStack.appendChild(div);
    } else {
      div.classList.add("minicard");
      div.addEventListener("click", () => {
        currentIndex = idx;
        showCard(currentIndex);
      });
      miniStack.appendChild(div);
    }
  });

  showCard(0);
}

function nextCard() {
  const cards = document.querySelectorAll(".card");
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
  seekToCurrentRange?.();
}

function prevCard() {
  const cards = document.querySelectorAll(".card");
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
  seekToCurrentRange?.();
}

function showCard(index) {
  const allCards = document.querySelectorAll(".card");
  const mainStack = document.querySelector(".card-stack");
  const miniStack = document.querySelector(".minicard-stack");

  mainStack.innerHTML = "";
  miniStack.innerHTML = "";

  allCards.forEach((card, i) => {
    card.classList.remove("active", "next", "minicard", "hidden");

    if (i === index) {
      card.classList.add("active");
      mainStack.appendChild(card);
    } else if (i === index + 1) {
      card.classList.add("next");
      mainStack.appendChild(card);
    } else {
      card.classList.add("minicard");
      card.onclick = () => {
        currentIndex = i;
        showCard(i);
      };
      miniStack.appendChild(card);
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}
