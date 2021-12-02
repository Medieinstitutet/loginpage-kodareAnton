// gör en local storage med lagring av användarnamn

// Array med alla passwords & namn

const ppl = [

    {
        name: "oliver",
        password: "test",
    },
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

// lägg till i localstrage med hjälp av JSON localStorage
localStorage.setItem("ppl", JSON.stringify(ppl));
let getPpl = JSON.parse(localStorage.getItem(ppl));



// Ett click event med på logginknappen
var btn = document.getElementById("btn")

btn.addEventListener("click", function(){

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    for (i = 0; i < ppl.length; i++) {
        if (name == ppl[i].name && password == ppl[i].password) {
            text.innerHTML = name + "<p> Välkommen till din sida </p>" + "<button id=`logOut´>logga ut</button>"
            console.log(name + "<p> Välkommen till din sida </p>" + "<button id=`logOut´>logga ut</button>")
            return
        }
    }
    console.error("Fel användarnamn eller lössenord")
    text.innerHTML =
    "<style: color:red>" + "<p id=`red´>Fel användarnamn eller lössenord</p>"
});




// logga ut event 

logOut.addEventListener("click", function(){

    var logOut = document.getElementById("logOut")
    
    logOut = localStorage.clear();
    location.reload();

});
