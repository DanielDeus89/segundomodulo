const lessonTitle = "Lesson 01";
const currentVideoId = "9xOqf7P6jYQ";

const timeRanges = [
  { start: 0, end: 17 },
  { start: 17, end: 35 },
  { start: 35, end: 50 },
  { start: 50, end: 66 },
  { start: 66, end: 85 },
  { start: 17, end: 107 },  
  { start: 17, end: 107 }
];

const lessonCards = [
  {
    title: "Practice Sentences",
    columns: [
      [
        ["I drink.", "Eu bebo."],
        ["You drink.", "Você bebe."],
        ["I drink water.", "Eu bebo água."]
      ],
      [
        ["You drink juice.", "Você bebe suco."],
        ["I drink coffee.", "Eu bebo café."],
        ["You drink milk.", "Você bebe leite."]
      ]
    ]
  },
    {
    title: "Practice Sentences",
    columns: [
      [
        ["I eat.", "Eu como."],
        ["You eat.", "Você come."],
        ["I eat bread.", "Eu como pão."]
      ],
      [
        ["You eat cheese.", "Você come queijo."],
        ["I eat fish.", "Eu como peixe."],
        ["You eat meat.", "Você come carne."]
      ]
    ]
  },
  {
    title: "Practice Sentences",
    columns: [
      [
        ["I drink coffee and milk.", "Eu bebo café e leite."],
        ["I drink water and juice.", "Eu bebo água e suco."],
        ["I drink tea and soda.", "Eu bebo chá e refrigerante."]
      ],
      [
        ["I eat bread and ham.", "Eu como pão e presunto."],
        ["I eat bread and cheese.", "Eu como pão e queijo."],
        ["I eat fish and meat.", "Eu como peixe e carne."]
      ]
    ]
  },
  {
    title: "Practice Sentences",
    columns: [
      [
        ["I eat bread and I drink milk.", "Eu como pão e bebo leite."],
        ["I eat cheese and I drink tea.", "Eu como queijo e bebo chá."],
        ["I eat fish and I drink soda.", "Eu como peixe e bebo refrigerante."]
      ],
      [
        ["I eat cheese and you eat ham.", "Eu como queijo e você come presunto."],
        ["I drink milk and you drink coffee.", "Eu bebo leite e você bebe café."],
        ["I eat bread and you eat cheese.", "Eu como pão e você come queijo."]
      ]
    ]
  },
  {
    title: "Verbs",
    columns: [
      [["to drink", "beber"]],
      [["to eat", "comer"]]
    ]
  },
  {
    title: "Vocabulary",
    columns: [
      [
        ["coffee", "café"],
        ["tea", "chá"],
        ["milk", "leite"],
        ["juice", "suco"],
        ["water", "água"],
        ["soda", "refrigerante"],
        ["fish", "peixe"]
      ],
      [
        ["meat", "carne"],
        ["cheese", "queijo"],
        ["ham", "presunto"],
        ["bread", "pão"],
        ["and", "e"],
        ["I", "eu"],
        ["you", "você"]
      ]
    ]
  },
  {
    title: "Expressões",
    columns: [
      [
        ["thank you", "obrigado"],
        ["thanks", "obrigado"]
      ],
      [
        ["please", "por favor"],
        ["hi", "oi"]
      ],
      [
        ["hello", "olá"],
        ["goodbye", "tchau"]
      ]
    ]
  },
  {
    title: "Grammar",
    columns: [
      [
        ["I drink", "Eu bebo"],
        ["I eat", "Eu como"]
      ],
      [
        ["You drink", "Você bebe"],
        ["You eat", "Você come"]
      ]
    ]
  },

  {
  title: "Listening Practice",
  type: "listening",
  segments: [
    { text: "1. I drink coffee and milk.", start: 171, end: 175 },
    { text: "2. You eat bread and cheese.", start: 175, end: 180 },
    { text: "3. You eat fish and you drink soda.", start: 180, end: 185 },
    { text: "4. I drink juice and I eat bread and ham.", start: 185, end: 191 },
    { text: "5. I eat bread and meat.", start: 191, end: 196 }
  ]
}

];




function loadLessonContent() {
  document.getElementById("lessonTitle").textContent = lessonTitle;
  const stack = document.querySelector(".card-stack");
  stack.innerHTML = "";

  lessonCards.forEach((card, index) => {
    const div = document.createElement("div");
    div.className = "card";
    if (index === 0) div.classList.add("active");

    // Título
    if (card.title) {
      const h2 = document.createElement("h2");
      h2.className = "section-title";
      h2.textContent = card.title;
      div.appendChild(h2);
    }

    // Se for card de Listening
    if (card.type === "listening" && Array.isArray(card.segments)) {
      const row = document.createElement("div");
      row.className = "listening-row";

      card.segments.forEach((segment) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "listening-card";

        const playBtn = document.createElement("button");
        playBtn.textContent = "▶️ Ouvir";
        playBtn.onclick = () => playSegment(segment.start, segment.end);

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "👁️ Exibir";
        toggleBtn.onclick = function () {
          toggleText(this);
        };

        const span = document.createElement("span");
        span.className = "hidden-text";
        span.textContent = segment.text;

        cardDiv.appendChild(playBtn);
        cardDiv.appendChild(toggleBtn);
        cardDiv.appendChild(span);
        row.appendChild(cardDiv);
      });

      div.appendChild(row);
      stack.appendChild(div);
      return; // evita processar abaixo
    }

    // Cards normais
    const grid = document.createElement("div");
    grid.className = "grid2";

    card.columns.forEach(colData => {
      const col = document.createElement("div");
      col.className = "vocab-col";

      colData.forEach(([en, pt]) => {
        const p = document.createElement("p");
        p.innerHTML = `<span class="text-blue">${en}</span><br><span class="text-white">${pt}</span>`;
        col.appendChild(p);
      });

      grid.appendChild(col);
    });

    div.appendChild(grid);
    stack.appendChild(div);
  });
}

// 🔸 ESSENCIAL PARA FUNCIONAR:
window.onload = () => {
  loadLessonContent();
};

function toggleText(button) {
  const card = button.closest(".listening-card");
  const isNowVisible = card.classList.toggle("show-text");
  button.textContent = isNowVisible ? "🙈 Ocultar" : "👁️ Exibir";
}
