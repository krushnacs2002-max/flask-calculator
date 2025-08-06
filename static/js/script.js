let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  fetch('/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ expression: display.value })
  })
  .then(res => res.json())
  .then(data => {
    display.value = data.result;
  })
  .catch(err => {
    display.value = 'Error';
  });
}
