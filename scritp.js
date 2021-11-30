// gör en local storage med lagring av användarnamn

let Name = localStorage.getItem("userName");
let Lname = localStorage.getItem("userLname");

// localStorage.clear();
console.log(userName);
console.log(userLname);



// Array med alla 
let ppl = [
    {
    Name: "Anton",
    Lname: "Tj",
},
{
    Name: "janne",
    Lname: "test",
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


// lägg till i localstrage med hjälp av JSON localStorage
localStorage.setItem("ppl", JSON.stringify(ppl));
let getPpl = JSON.parse(localStorage.getItem(ppl))

// logga ut event 


// Ett click event med på logginknappen
btn.addEventListener("click", function(){
    let btn = document.getElementById("btn")
    let inputOne = document.getElementById("inputone").Value;
    let inputTwo = document.getElementById("inputtwo").Value;

    let loggin = inputOne + inputTwo;
    document.getElementById("text").innerHTML = "välkommen" + " " + inputOne + " " + inputTwo
    
    
    console.log(loggin);
});
