const randomNumbr = num => Math.floor(Math.random()*num);

const wordRandom = {
    monthBirth: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    hobbies: ['coding', 'social media', 'sports', 'books', 'video games', 'board games', 'parties'],
    secret: ['you love your apple tart with cream', 'you watch all the star wars movies while wearing your Boba Fett costume', 'you lost the key of your digital vault and can\'t have access to your crypto.']
}

let message = []

for (i in wordRandom) {
    let pickedWord = randomNumbr(wordRandom[i].length);

    switch (i) {
        case 'monthBirth':
            message.push(`You were born in ${wordRandom[i][pickedWord]}`);
            break;
        case 'hobbies':
            message.push(`You like ${wordRandom[i][pickedWord]}`);
            break;
        case 'secret':
            message.push(`And your little secret is ${wordRandom[i][pickedWord]}`);
            break;
    }
}





const messageOutput = messageSel => messageSel.join('\n')


console.log(messageOutput(message));

