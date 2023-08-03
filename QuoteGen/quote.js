let options = {
    method: 'GET',
    headers: { 'x-api-key': 'eJH4Q5Xb2w955MfUdaMy4A==8QhfUtsA4VgacIQv' }
  }
  
  let url = 'https://api.api-ninjas.com/v1/quotes'
  
  
  fetch(url,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          quote.innerHTML = data[0].quote;
          author.innerHTML = data[0].author;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


const quote = document.getElementById("quote");
const author = document.getElementById("author");

function refreshPage() {
    location.reload();
}

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ----by " + author.innerHTML , "Tweet Window" , "width = 600 , height = 300");
}