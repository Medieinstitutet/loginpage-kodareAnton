// gör en local storage med lagring av användarnamn

// Array med alla passwords & namn

let ppl = [
    {
    name: "anton",
    password: "test",
},
{
    name: "janne",
    password: "test",
},
{
    name: "adam",
    password: "test",
},
{
    name: "fillippa",
    password: "test",
},
{
    name: "markus",
    password: "test",
}];
console.log(ppl);


// Ett click event med på logginknappen
var btn = document.getElementById("btn")

btn.addEventListener("click", function(){

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    for (i = 0; i < ppl.length; i++) {
        if (name == ppl[i].name && password == ppl[i].password) {
            console.log(name + " " + "Välkommen till din sida")
            return
        }
    }
    console.error("Fel användarnamn eller lössenord")
});

// lägg till i localstrage med hjälp av JSON localStorage
localStorage.setItem("ppl", JSON.stringify(ppl));
let getPpl = JSON.parse(localStorage.getItem(ppl));

// logga ut event 
