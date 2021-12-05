

///////////////// hämar om det finns någon användare redan inloggad//////////////////////////
const loggedInUser = localStorage.getItem("loggedInUser")
const JSONLoggedInUser = JSON.parse(loggedInUser)

    if (JSONLoggedInUser){
        text.innerHTML = 
        "<div id=box>" + JSONLoggedInUser.name + "<p> Välkommen till din sida </p>" + "<button id='logOut' onclick='logOut()'>logga ut</button>" + "<div>"
        console.log(JSONLoggedInUser);
    }

//Function to print the content of local storage to console
function printLocalStorage() {
    console.log('Local Storage:')
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(key, value);
    }
}

function getPeople() {
    return JSON.parse(localStorage.getItem('ppl')) || []
}

/////////////////////// Ett click event med på logginknappen /////////////////////////////////////
var btn = document.getElementById("btn")

//login
btn.addEventListener("click", function(){

    const localStoragePeople = getPeople()
    console.log('Local storage people', localStoragePeople)

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    for (let i = 0; i < localStoragePeople.length; i++) {
        console.log(localStoragePeople[i])
        console.log(localStoragePeople[i].name, localStoragePeople[i].password)

        if (name == localStoragePeople[i].name && password == localStoragePeople[i].password){
            localStorage.setItem("loggedInUser", JSON.stringify(localStoragePeople[i]))
            text.innerHTML = 
            "<div id=box>" + name + "<p> Välkommen till din sida </p>" + "<button id='logOut' onclick='logOut()'>logga ut</button>" + "<div>"
            return
            // Ta Användarnamn från min localStorage istället
        }
    }
    console.error("Fel användarnamn eller lössenord")
    text.innerHTML =
    "<p id=red>Fel användarnamn eller lössenord</p>"
});


// skapa nya loggin till array/localstorage
const addBtn = document.getElementById("addbtn")

////adda användare till local storage
addBtn.addEventListener("click", function(){

    var addName = document.getElementById("addname").value;
    var addPassword = document.getElementById("addpassword").value;

    const key = addName
    const value = addPassword

    // lägg till i localstrage med hjälp av JSON localStorage

    let getPpl = getPeople()
    getPpl.push({"name": key, "password": value});
    localStorage.setItem("ppl", JSON.stringify(getPpl));

    text.innerHTML = "<p id='welcome'> Välkommen ny användare </p>"

    printLocalStorage();
});

printLocalStorage();

   // logga ut event 
function logOut() {

    text.innerHTML = ""
    localStorage.removeItem("loggedInUser")
}
