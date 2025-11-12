function generateLyrics(event) {
  event.preventDefault();

  new Typewriter("#lyric-output", {
    strings: "I want all things good Music!!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let formElement = document.querySelector("#lyric-form");
formElement.addEventListener("submit", generateLyrics);
