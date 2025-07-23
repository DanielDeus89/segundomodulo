const lessonTitle = "Lesson 01";
const currentVideoId = "9xOqf7P6jYQ";

const timeRanges = [
  { start: 0, end: 17 },
  { start: 17, end: 36 },
  { start: 36, end: 50 },
  { start: 50, end: 66 },
  { start: 66, end: 85 },
  { start: 85, end: 107 },
  { start: 107, end: 107 }
];

const lessonCards = [
  {
    title: "Verbs",
    columns: [
      [["to do, did", "fazer"], ["to pay, paid", "pagar"]],
      [["to put, put", "pôr, colocar"], ["going to", "futuro"]]
    ]
  },
    {
    title: "Vocabulary",
    columns: [
      [
        ["internet", "internet"],
        ["virus", "vírus"],
        ["paper", "jornal, papel"],
        ["newsstand", "banca de jornais"],
        ["nightstand", "criado mudo"],
        ["ready", "pronto"],
        ["Brazilian", "brasileiro"],
        ["American", "americano"],
        ["slow", "lento, devagar"],
        ["same", "mesmo"]
      ],
      [
        ["on", "sobre, em cima"],
        ["floor", "chão, piso"],
        ["weather", "tempo (clima)"],
        ["snow", "neve"],
        ["rain", "chuva"],
        ["fog", "neblina"],
        ["cloud", "nuvem"],
        ["sun", "sol"],
        ["beautiful", "bonito"],
        ["forgetful", "esquecido"]
      ]
    ]
  },
 {
    title: "Expressions",
    columns: [
      [["to go to bed", "ir dormir, deitar-se"]],
      [["to access the internet", "acessar a internet"]],
      [["great", "ótimo"], ["finally", "finalmente"]]
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

    if (card.title) {
      const h2 = document.createElement("h2");
      h2.className = "section-title";
      h2.textContent = card.title;
      div.appendChild(h2);
    }

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
