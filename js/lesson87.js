const lessonTitle = "Lesson 87";
const currentVideoId = "qZGoe2lPf90";

const timeRanges = [
  { start: 0, end: 13 }, //Verbs
  { start: 13, end: 91 }, //Vocabulary
  { start: 91, end: 114 }, //exp 
  { start: 114, end: 150 }, //Grammar
  { start: 150, end: 225 }, //Frases 1
  { start: 225, end: 294 }, //Fr2
  { start: 294, end: 328 }, //Fr3
  { start: 328, end: 484 }, //Verbs
  { start: 484, end: 799 }, //vac
  { start: 799, end: 886 }, //exp
  { start: 886, end: 1087 }, //Gramm  
];

const lessonCards = [
{
  "title": "Verbs",
  "columns": [
    [
      ["would", "condicional"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["interest", "juros"],
      ["bank account", "conta bancária"],
      ["savings account", "poupança"],
      ["bank teller", "caixa de banco"],
      ["ATM", "caixa eletrônico"],
      ["checkbook", "talão de cheques"],
      ["engagement", "noivado, compromisso"],
      ["date", "namorado, encontro"],
      ["flat", "apartamento, raso, liso"],
      ["outlet", "tomada"],
      ["outlet store", "loja de descontos"]
    ],
    [
      ["light switch", "interruptor"],
      ["cooler", "isopor, refrigerador"],
      ["fiancé", "noivo"],
      ["fiancée", "noiva"],
      ["ship", "navio"],
      ["boat", "barco"],
      ["yacht", "iate"],
      ["rarely", "raramente"],
      ["sea", "mar"],
      ["novel", "romance"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to get engaged", "noivar, ficar noivo"],
      ["to date", "namorar"]
    ],
    [
      ["to have a date", "ter um encontro"],
      ["to burn a CD", "gravar um CD"]
    ],
    [
      ["although", "embora"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["He would like to date her.", "Ele gostaria de namorá-la."],
      ["She wouldn't like to go on a date with him.", "Ela não gostaria de sair com ele."],
      ["Wouldn't you like to go out with us?", "Você não gostaria de sair conosco?"]
    ],
    [
      ["Would you burn this CD for me?", "Você gravaria este CD para mim?"],
      ["Would this be good for him?", "Isto seria bom para ele?"],
      ["Wouldn't she like it?", "Ela não gostaria disto?"]
    ]
  ]
},
{
  "title": "Input – Would (Affirmative)",
  "columns": [
    [
      ["He would like to see you tomorrow.", "Ele gostaria de ver você amanhã."],
      ["She would like to say something.", "Ela gostaria de dizer algo."],
      ["They would like to see it now.", "Eles gostariam de ver isso agora."],
      ["She would like to understand it better.", "Ela gostaria de entender isso melhor."],
      ["We would like to travel again.", "Nós gostaríamos de viajar novamente."],
      ["They would like to come with us.", "Eles gostariam de vir conosco."]
    ],
    [
      ["I think they wouldn't do that.", "Eu acho que eles não fariam isso."],
      ["She wouldn't like anybody to know.", "Ela não gostaria que ninguém soubesse."],
      ["I wouldn't like to work this Saturday.", "Eu não gostaria de trabalhar neste sábado."],
      ["They wouldn't know this.", "Eles não saberiam disso."],
      ["I wouldn't call her now.", "Eu não ligaria para ela agora."],
      ["He wouldn't do that.", "Ele não faria isso."]
    ]
  ]
},
{
  "title": "Input – Would (Questions)",
  "columns": [
    [
      ["Would you like something to drink?", "Você gostaria de algo para beber?"],
      ["Would you wait for me?", "Você esperaria por mim?"],
      ["Why would she do it?", "Por que ela faria isso?"],
      ["Where would you like to go?", "Para onde você gostaria de ir?"],
      ["When would he like to travel?", "Quando ele gostaria de viajar?"],
      ["Would you do that for us?", "Você faria isso por nós?"]
    ],
    [
      ["Wouldn't you like to read this novel?", "Você não gostaria de ler este romance?"],
      ["Why wouldn't you live in Sweden?", "Por que você não moraria na Suécia?"],
      ["Wouldn't you date her?", "Você não namoraria com ela?"],
      ["Wouldn't they stay for dinner?", "Eles não ficariam para o jantar?"],
      ["Why wouldn't you talk to him?", "Por que você não falaria com ele?"],
      ["Wouldn't you call her again?", "Você não ligaria para ela novamente?"]
    ]
  ]
},
{
  "title": "Input – Dates & Relationships",
  "columns": [
    [
      ["She has a date tonight.", "Ela tem um encontro hoje à noite."],
      ["They went on a date.", "Eles foram a um encontro."],
      ["He's my date.", "Ele é meu par / meu encontro."]
    ],
    [
      ["Wouldn't you date him?", "Você não namoraria com ele?"],
      ["They got engaged.", "Eles ficaram noivos."],
      ["Did you see his fiancée?", "Você viu a noiva dele?"]
    ]
  ]
},
{
  "title": "Verbs",
  "columns": [
    [
      ["would", "condicional"]
    ]
  ]
},
{
  "title": "Vocabulary",
  "columns": [
    [
      ["interest", "juros"],
      ["bank account", "conta bancária"],
      ["savings account", "poupança"],
      ["bank teller", "caixa de banco"],
      ["ATM", "caixa eletrônico"],
      ["checkbook", "talão de cheques"],
      ["engagement", "noivado, compromisso"],
      ["date", "namorado, encontro"],
      ["flat", "apartamento, raso, liso"],
      ["outlet", "tomada"],
      ["outlet store", "loja de descontos"]
    ],
    [
      ["light switch", "interruptor"],
      ["cooler", "isopor, refrigerador"],
      ["fiancé", "noivo"],
      ["fiancée", "noiva"],
      ["ship", "navio"],
      ["boat", "barco"],
      ["yacht", "iate"],
      ["rarely", "raramente"],
      ["sea", "mar"],
      ["novel", "romance"]
    ]
  ]
},
{
  "title": "Expressions",
  "columns": [
    [
      ["to get engaged", "noivar, ficar noivo"],
      ["to date", "namorar"]
    ],
    [
      ["to have a date", "ter um encontro"],
      ["to burn a CD", "gravar um CD"]
    ],
    [
      ["although", "embora"]
    ]
  ]
},
{
  "title": "Grammar",
  "columns": [
    [
      ["He would like to date her.", "Ele gostaria de namorá-la."],
      ["She wouldn't like to go on a date with him.", "Ela não gostaria de sair com ele."],
      ["Wouldn't you like to go out with us?", "Você não gostaria de sair conosco?"]
    ],
    [
      ["Would you burn this CD for me?", "Você gravaria este CD para mim?"],
      ["Would this be good for him?", "Isto seria bom para ele?"],
      ["Wouldn't she like it?", "Ela não gostaria disto?"]
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

    // Verifica se existe imagem no card
if (card.image) {
  const img = document.createElement("img");
  img.src = card.image;
  img.alt = "Imagem da pergunta";
  img.style.maxWidth = "100%";
  img.style.marginBottom = "10px";
  div.appendChild(img);
}


    if (card.title) {
      const h2 = document.createElement("h2");
      h2.className = "section-title";
      h2.textContent = card.title;
      div.appendChild(h2);
    }

    // Cards do tipo Listening
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
      return;
    }

    // Outros tipos de cards
    const grid = document.createElement("div");
    grid.className = "grid2";

    card.columns.forEach(colData => {
      const col = document.createElement("div");
      col.className = "vocab-col";

colData.forEach(item => {
  // Verifica se é uma imagem
  if (item[0] === "img" && item[1]) {
    const img = document.createElement("img");
    img.src = item[1];
    img.alt = "Imagem da coluna";
   img.style.display = "block";
img.style.margin = "0 auto 30px";
img.style.maxWidth = "200%";
img.style.maxHeight = "300px";
img.style.borderRadius = "8px";
img.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";

    
    col.appendChild(img);
  } else {
    const p = document.createElement("p");

    if (item.length === 4) {
      const [text, , start, end] = item;

      const span = document.createElement("span");
      span.className = "text-blue clickable";
      span.textContent = text;
      span.onclick = () => playSegment(start, end);

      p.appendChild(span);
    } else {
      const [en, pt] = item;
      p.innerHTML = `<span class="text-blue">${en}</span><br><span class="text-white">${pt}</span>`;
    }

    col.appendChild(p);
  }
});


      grid.appendChild(col);
    });

    div.appendChild(grid);
    stack.appendChild(div);
  });
}


function playSegment(start, end) {
  const iframe = document.querySelector("iframe");
  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func: "loadVideoById",
      args: [{
        videoId: currentVideoId,
        startSeconds: start,
        endSeconds: end
      }]
    }),
    "*"
  );
}

function toggleText(button) {
  const card = button.closest(".listening-card");
  const isNowVisible = card.classList.toggle("show-text");
  button.textContent = isNowVisible ? "🙈 Ocultar" : "👁️ Exibir";
}



window.onload = () => {
  loadLessonContent();
};
