const form = document.querySelector(`form`);
const input = form.querySelector(`input`);
const  apiKey = `Ehg5Nso4pNe0kGRIfPW`;

form.addEventListener(`keypress`, function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    console.log(input.value);
  }
});


function getStreet(inputStName){
fetch(`https://api.winnipegtransit.com/v3/streets.json?api-key=${apiKey}&name=${inputStName}&usage=long`)
.then(response => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error("There is a problem (;T__T:)");
  }
}).then(json => console.log(json.streets))
}

getStreet(`henlow`)