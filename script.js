function showLyrics(response) {
  let lyricsOutputElement = document.querySelector("#lyric-output");
  lyricsOutputElement.classList.remove("blinking");
  lyricsOutputElement.innerHTML = "";
  new Typewriter("#lyric-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateLyrics(event) {
  event.preventDefault();

  let lyricsInputElement = document.querySelector("#lyrics-input");
  let apiKey = "3daotdb8ad0fef1b452b37bd25c25547";
  let prompt = `Generate song lyrics about ${lyricsInputElement.value}`;
  let context =
    "You are a world class songwriter. Write creative and engaging song lyrics. Make sure they rhyme. Format the lyrics in verses and choruses. Use line breaks and line spaces to separate the lines of the verses and choruses.  Do not include any additional text or explanations. The lines should be suitable for singing and less than 10 lines.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let lyricsOutputElement = document.querySelector("#lyric-output");
  let generatedElement = document.querySelector("#generated");
  generatedElement.style.display = "block";
  lyricsOutputElement.innerHTML = `Generating lyrics about ${lyricsInputElement.value}...`;
  lyricsOutputElement.classList.add("blinking");

  axios.get(apiUrl).then(showLyrics);
}
let formElement = document.querySelector("#lyric-form");
formElement.addEventListener("submit", generateLyrics);
