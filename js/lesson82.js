const lessonTitle = "Lesson 82";
const currentVideoId = "v-GCZK_eY48";

const timeRanges = [

  { start: 7, end: 131 }, 
  { start: 131, end: 181 }, 
  { start: 181, end: 319 }, 
  { start: 319, end: 370 }, 
  { start: 370, end: 500 }, 
  { start: 500, end: 547 }, 
  { start: 555, end: 744 }, 
  { start: 749, end: 834 }, 
  { start: 915, end: 930 }, 
  { start: 930, end: 948 }, 
  { start: 948, end: 963 }, 
  { start: 963, end: 979 }, 
  { start: 979, end: 995 }, 
  { start: 995, end: 1011 }, 
  { start: 1011, end: 99999 }, 
 


];

const lessonCards = [
 {
   title: "Practice",
    columns: [
      [ 
      ]
    ]
  },
  {
     title: "Change Into - or +",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Practice",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Change into interrogative",
    columns: [
      [ 
      ]
    ]
  },
  {
    title: "Practice",
    columns: [
      [
      ]
    ]
  },
  {
    title: "Short Answers",
    columns: [
      [
      ]
    ]
  },
{
  "title": "Questions in Trio",
  "columns": [
    [
      ["What sports can he / she play?", ""],
      ["Can he / she sing songs in English?", "  "],
      ["Could he / she use the computer when he / she was 8 years old?", ""],
      ["How often does he / she go out?", ""],
      ["Can he / she play the piano?", ""],
      ["Does he / she think American food is spicy?", ""],
      ["What's his / her phone number?", " "],
      ["How often does he / she use the internet?", ""],
      ["How many people are there in his / her family?", ""],
      ["Does he / she shop on the internet?", ""]
    ]
  ]
},
  {
    title: "Now Answer the Following Questions",
    columns: [
      [ 
      ]
    ]
  },

 {
    title: "Listening - Question 1",
    columns: [
      [
      ["img", "../images/82_1.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 2",
    columns: [
      [
      ["img", "../images/82_2.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 3",
    columns: [
      [
      ["img", "../images/82_3.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 4",
    columns: [
      [
      ["img", "../images/82_4.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 5",
    columns: [
      [
      ["img", "../images/82_5.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 6",
    columns: [
      [
      ["img", "../images/82_6.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  },

{
    title: "Liste and Answer",
    columns: [
      [ 
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
