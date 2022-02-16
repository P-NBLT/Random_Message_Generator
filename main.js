const shuffleNum = array => {
    let currentIndex = array.length, randomIndex
    
    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
    
    }
    
    console.log(shuffleNum([0,1,2,3,4]));
    
    const shuffleArr = shuffleNum([0,1,2,3,4])
    
    let randomNum = shuffleArr.slice(0,3);
    
    

    
// generate a random message based on the 3 first digit of the previous function.

const messageGenerator = randomNum => {

    
    let messageFolder = [];
    
    const randomMessage = randomNum.map(num =>{
        switch (num) {
            case 0:
                return messageFolder.push('Today is your lucky day!');
                break;
            case 1:
                return messageFolder.push('Don\'t forget to be grateful. Look at what you have accomplish so far! Time to reward yourself.');
                break;
            case 2:
                return messageFolder.push('The bakery called this morning. You forgot the kid and we have to pay a great deal of money as they eated all the pastery.');
                break;
            case 3:
                return messageFolder.push('10 push ups and 1 pull up. Is this what you can only do?');
                break;
            case 4:
                return messageFolder.push('Look at you! You look great!');
                break;
        
        }
    
    })
        
    
    return messageFolder.join(' \n\n');
    }
    
    console.log(messageGenerator(randomNum));    