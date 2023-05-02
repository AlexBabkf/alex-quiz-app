const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get values from form

  const tar = event.target.elements;
  const question = tar.question.value;
  const answer = tar.answer.value;
  const tag = tar.tags.value;

  // Recreate question card without innerHTML

  const section = document.createElement("section");
  section.setAttribute("class", "question");

  const img = document.createElement("img");
  img.setAttribute("class", "bookmark");
  img.setAttribute("src", "assets/bookmark.png");
  img.setAttribute("alt", "bookmark");
  img.setAttribute("data-js", "icon");

  const h3 = document.createElement("h3");
  h3.textContent = question;

  const input = document.createElement("input");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Show Answer");
  input.setAttribute("data-js", "reveal-answer");

  const div = document.createElement("div");
  div.setAttribute("class", "answer");
  div.setAttribute("data-js", "answer");
  div.textContent = answer;

  const div2 = document.createElement("div");
  div2.setAttribute("class", "tag-group");

  const a = document.createElement("a");
  a.setAttribute("class", "tag");
  a.textContent = tag;

  div2.append(a);
  section.append(img, h3, input, div, div2);

  const main = document.querySelector("main");
  main.appendChild(section);
});
