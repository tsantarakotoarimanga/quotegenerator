const quote = document.getElementById("quote");
console.log(quote);

const author = document.getElementById("author");
console.log(author);

const newQuote = document.getElementById("new-quote");
console.log(newQuote);

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote(api_url).then((data) => console.log("resolved", data));

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "--by " +
      author.innerHTML,
    "Tweet window",
    "width=600, height=300"
  );
}
