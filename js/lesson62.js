const lessonTitle = "Lesson 62";
const currentVideoId = "vDAU4iSe7bo";

const timeRanges = [
  { start: 0, end: 109 },
  { start: 109, end: 153 },
  { start: 153, end: 260 },
  { start: 260, end: 315 },
  { start: 315, end: 430 },
  { start: 430, end: 475 },
  { start: 481, end: 649 },
  { start: 656, end: 717 },
  { start: 725, end: 736 },
  { start: 736, end: 750 },
  { start: 750, end: 762 },
  { start: 762, end: 779 },
  { start: 779, end: 796 },
  { start: 796, end: 811 },
  { start: 811, end: 827 },
  { start: 827, end: 9999 },
 




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
      ["Does he/she like rainy weather?", ""],
      ["Where is he/she going next vacation?", ""],
      ["When is he/she going to the mall?", ""],
      ["Can he/she speak Chinese?", ""],
      ["What did he/she do yesterday?", ""],
      ["Does anybody speak English at his/her house?", ""],
      ["What is he/she going to do next weekend?", ""],
      ["Is he/she going to buy a car?", ""],
      ["Does he/she have a friend who lives in the States?", ""],
      ["Did he/she go to the movies last weekend?", ""]
    ]
  ]
  },
  {
  "title": "Listen and Answer",
  "type": "listening",
  "segments": [
    { "text": " ", "start": 658, "end": 662 },  
    { "text": " ", "start": 662, "end": 668 },  
    { "text": " ", "start": 668, "end": 674 },  
    { "text": " ", "start": 674, "end": 680 },   // chine
    { "text": " ", "start": 680, "end": 686 },//yester
    { "text": " ", "start": 686, "end": 691 },//at your house
    { "text": " ", "start": 691, "end": 698 },// next wk
    { "text": " ", "start": 698, "end": 703 },//car
    { "text": " ", "start": 703, "end": 709 },//USA
    { "text": " ", "start": 709, "end": 717 },//Kw
  ]
  },
  {
    title: "Web Talk",
    columns: [
      [ 
        ["Where can I find this information?", ""],
        ["Why don't you google it?", ""],
      ]
    ]
  },
  {
    title: "Listening - Question 1",
    columns: [
      [
      ["img", "../images/62_1.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, 
  {
    title: "Listening - Question 2",
    columns: [
      [
      ["img", "../images/62_2.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 3",
    columns: [
      [
      ["img", "../images/62_3.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 4",
    columns: [
      [
      ["img", "../images/62_4.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 5",
    columns: [
      [
      ["img", "../images/62_5.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  }, {
    title: "Listening - Question 6",
    columns: [
      [
      ["img", "../images/62_6.png"],
      ["a)", "", 4, 17],
      ["b)", "", 4, 17],
      ["c)", "", 4, 17]
      ]
    ]
  },
   {
  "title": "Listen and Answer",
  "type": "listening",
  "segments": [
    { "text": " ", "start": 832, "end": 835 },  
    { "text": " ", "start": 835, "end": 838 },  
    { "text": " ", "start": 838, "end": 842 },  
    { "text": " ", "start": 842, "end": 845 },   
    { "text": " ", "start": 845, "end": 686 }
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
