function showLyrics(response) {
  console.log("lyrics generated");
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

  console.log("generating lyrics");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(showLyrics);
}
let formElement = document.querySelector("#lyric-form");
formElement.addEventListener("submit", generateLyrics);
