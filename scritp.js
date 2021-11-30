// gör en local storage med lagring av användarnamn
localStorage.setItem("userName", "Janne");
localStorage.setItem("userLname", "Kemi");

let userName = localStorage.getItem("userName");
let userLname = localStorage.getItem("userLname");

// localStorage.clear();
console.log(userName);
console.log(userLname);


// Ett click event med på logginknappen
btn.addEventListener("click", function(){
    let btn = document.getElementById("btn")
    let inputOne = document.getElementById("inputone").Value;
    let inputTwo = document.getElementById("inputtwo").Value;

    let loggin = inputOne + inputTwo;
    document.getElementById("text").innerHTML = "välkommen" + " " + inputOne + " " + inputTwo
    
    
    console.log(loggin);
});

// Array
let ppl = [
    {
    Name: "Anton",
    Lname: "Tj",
},
{
    Name: "Janne",
    Lname: "Kemi",
},
{
    Name: "Adam",
    Lname: "Tj",
},
{
    Name: "Fillippa",
    Lname: "Johns",
},
{
    Name: "Markus",
    Lname: "Ko",
}];
console.log(ppl);
// lägg till i localstrage med "skapa konto knappen"


// logga ut event 