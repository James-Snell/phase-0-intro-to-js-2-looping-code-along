// Code your solutions in this file
let name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name){
    let letter = [];
    for(let i = 0; i < name.length; i++) {
        letter.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return letter;
}
writeCards()



function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count);
        count--
    }
}

countDown()