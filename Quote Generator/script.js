const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

const category = 'inspirational';

function fetchQuote() {
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'Vi9G0tISwn+x53PfZRONbQ==yuZSZDTz3pmN8JD0' }, 
    contentType: 'application/json',
    success: function (result) {
      if (result && result.length > 0) {
        // Display the quote and author
        quoteText.innerText = `"${result[0].quote}"`;
        authorText.innerText = `- ${result[0].author}`;
      }
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
      quoteText.innerText = "Sorry, we couldn't fetch a quote at the moment.";
      authorText.innerText = '';
    },
  });
}


newQuoteBtn.addEventListener('click', fetchQuote);


fetchQuote();
