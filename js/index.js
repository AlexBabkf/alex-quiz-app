// Reveal / Hide Answer

const revealAnswer = document.querySelector('[data-js="reveal-answer"]');
const answer = document.querySelector('[data-js="answer"]');

revealAnswer.addEventListener("click", () => {
  if (answer.innerHTML) {
    answer.innerHTML = "";
    revealAnswer.value = "Show Answer";
  } else {
    answer.innerHTML = "This is the answer";
    revealAnswer.innerHTML = "Hide Answer";
  }
});

// Change Bookmark Icon

const icon = document.querySelector('[data-js="icon"]');

icon.addEventListener("click", () => {
  if (icon.src.match("assets/bookmark.png")) {
    icon.src = "assets/bookmark_filled.png";
  } else {
    icon.src = "assets/bookmark.png";
  }
});
