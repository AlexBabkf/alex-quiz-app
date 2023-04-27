const revealAnswer = document.querySelectorAll('[data-js="reveal-answer"]');

revealAnswer.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.toggleAttribute("hidden");
  });
});
