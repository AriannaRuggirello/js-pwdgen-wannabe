/* Password generator
Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

// all var
let userName, surname, favouriteColour, password, messaggio;

// username var
userName = prompt("inserisci il tuo nome");
console.log(userName)

document.getElementById("myUsername").innerHTML = "il tuo nome:" + " " + userName

// surname var
surname = prompt("inserisci il tuo cognome");
console.log(surname)

document.getElementById("mySurname").innerHTML = "il tuo cognome:" +  " " + surname

// favourite colour var
favouriteColour = prompt("inserisci il tuo colore preferito");
console.log(favouriteColour)

document.getElementById("myFavouriteColour").innerHTML = "il tuo colore preferito è :" +  " " + favouriteColour

// password with previous var
password = `${userName} ${surname} ${favouriteColour} 24`
console.log(password)

// message 
messaggio= ` Ciao! ${userName} ${surname}, 
la tua nuova password è ${password}
`
console.log(messaggio)

document.getElementById("myPassword").innerHTML = messaggio


