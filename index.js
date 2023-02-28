 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

const professors = ['noha', 'julien', 'nour', 'khaled', 'george','chris'];

let count=0;
const word = professors[Math.floor(Math.random() * professors.length)];
console.log(word);
console.log(word.length);
let wordDashes = [];
for (let i = 0; i < word.length; i++) {
    wordDashes.push("_");
    console.log(wordDashes)

}

document.getElementById("word-dashes").innerHTML = "-".repeat(word.length);
for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement('button');
    button.innerHTML = alphabet[i];
    button.classList.add('letter');

    button.addEventListener('click', function() {
        const letter = alphabet[i];
        if (word.includes(letter)) {
            for (let j = 0; j < word.length; j++) {
                if (word[j] === letter) {
                    wordDashes[j] = letter;
                }
                
            }
            wordDisplay.innerHTML = wordDashes.join(' ');
            
        }
        this.disabled = true;
        count++;
        console.log("count"+count)
         if(count>6){
            alert("You Lost! try again")
        }
    });

    document.getElementById('container').appendChild(button);
}

const wordDisplay = document.getElementById('word-dashes');
wordDisplay.innerHTML = '';
for (let i = 0; i < wordDashes.length; i++) {
    wordDisplay.innerHTML += wordDashes[i] + ' ';
}
