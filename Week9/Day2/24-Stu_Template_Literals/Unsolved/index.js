// music should be an object with title, artist, and album properties
const music = {
  title: "Grrrl Like",
  artist: "Dope Saint Jude",
  genre: "Hip-Hop",
  album: "single",
  year: "2018"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    <h2>${music.title}</h2>
    <p>${music.title} by ${music.artist} is a ${music.genre} song released as a ${music.album} in ${music.year}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

