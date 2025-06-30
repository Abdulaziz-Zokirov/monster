// book.js

const chapters = [
  {
    title: "Глава 1. Начало-конца",
    content: `
      <p>Весенняя ночь, звуки города оглушают...<br>...но в комнате был не один труп... Их было два.</p>
    `
  },
  {
    title: "Глава 2. Происхождение",
    content: `
      <h2>Часть 1 — Рождение</h2>
      <p>Говорят, в четырнадцатое мая тысяча девятьсот девяносто девятого года...</p>
      <h2>Часть 2 — Добро (2006 год)</h2>
      <p>Тёплым утром летнего дня... Но спокойствия не продлилась долго...</p>
      <h2>Часть 3 — Начало монстра</h2>
      <p>Но спокойствие не длилось долго. В этот раз в дверь не стучали...</p>
    `
  }
];

let currentChapter = 0;

function loadChapter(index) {
  const container = document.getElementById("book-container");
  container.classList.remove("fade-in");
  void container.offsetWidth; // reset animation
  container.innerHTML = `
    <h2>${chapters[index].title}</h2>
    <div class="chapter-text">${chapters[index].content}</div>
  `;
  container.classList.add("fade-in");
}

document.addEventListener("DOMContentLoaded", () => {
  loadChapter(currentChapter);

  // Перелистывание стрелками
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      currentChapter = (currentChapter + 1) % chapters.length;
      loadChapter(currentChapter);
    } else if (e.key === "ArrowLeft") {
      currentChapter = (currentChapter - 1 + chapters.length) % chapters.length;
      loadChapter(currentChapter);
    }
  });
});
