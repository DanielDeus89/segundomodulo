const lessonTitle = "Review 4 ";
const currentVideoId = "cbL0w6c1z8w";

const timeRanges = [
  { start: 0, end: 72 },  //Linking Sounds
  { start: 78, end: 180 },  //Highlights
  { start: 327, end: 420 },  //Irregular Verbs
  { start: 420, end: 775 }, //Part 1 - Repeat
  { start: 775, end: 1015 }, //Part 2 - Answer
];

const lessonCards = [
{
  "title": "Linking Sounds",
  "columns": [
    [
      ["Good‿evening.", ""],
      ["Good‿afternoon.", ""],
      ["I drink‿a lot‿of fruit juice.", ""],
      ["I eat‿a lot‿of bread‿and cheese.", ""],
      ["What‿about yourself?", ""],
      ["What‿about‿it?", ""]
    ],
    [
      ["The waiter brought‿us the water.", ""],
      ["Nobody got‿up yet.", ""],
      ["It's always‿a good‿idea.", ""],
      ["It's never‿a bad‿idea.", ""],
      ["I want‿to write‿a letter.", ""],
      ["I want‿to write‿in English today.", ""]
    ]
  ]
},
{
  "title": "Highlights",
  "columns": [
    [
      ["That car is mine.", ""],
      ["Are these books yours?", ""],
      ["This computer is his.", ""],
      ["This passport is hers.", ""],
      ["This cell phone is its best product.", ""],
      ["The yellow house is ours.", ""],
      ["Is the black car yours?", ""],
      ["Those résumés are theirs.", ""],  


     
    ],
    [
       ["I stopped to study a little.", ""],
      ["I stopped studying there.", ""],
        ["", ""],
      ["I could come.", ""],
      ["She couldn't stay.", ""],
      ["Could we go now?", ""],
      ["Couldn't you call him?", ""],
    ["", ""],
       ["You should watch out.", ""],
      ["He shouldn't say it.", ""],
      ["Should we leave?", ""],
      ["Shouldn't she stop?", ""]
    ],
   
  ]
},
{
  "title": "Irregular Verbs",
  "columns": [
    [
      ["bring", ""],
      ["do", ""],
      ["forget", ""],
      ["give", ""],
      ["leave", ""],
      ["pay", ""],
      ["put", ""],
      ["run", ""],
      ["see", ""],
      ["send", ""],
      ["sing", ""],
      ["stand", ""],
      ["take", ""],
      ["think", ""]
    ],
    [
      ["brought", ""],
      ["did", ""],
      ["forgot", ""],
      ["gave", ""],
      ["left", ""],
      ["paid", ""],
      ["put", ""],
      ["ran", ""],
      ["saw", ""],
      ["sent", ""],
      ["sang", ""],
      ["stood", ""],
      ["took", ""],
      ["thought", ""]
    ]
  ]
},

  {
       title: "Part 1 - Repeat",
    columns: [
      [
      ]
    ]
  }, {
       title: "Part 2 - Answer",
    columns: [
      [
      ]
    ]
  },

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
