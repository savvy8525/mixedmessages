function randomNumber(num) {
    return Math.floor(Math.random() * num - 1);
}

let showerThoughts = ["How would a dog wear pants? Front or back legs?", 
    "Is a hotdog a sandwich?", 
    "Is ketchup a smoothie",
    "Where would a giraffe wear a tie? At the base of the head or above the shoulders?",
    "Would you rather fight 100 duck sized horses or 1 horse sized duck?"];

let randomNum = randomNumber(showerThoughts.length);

function printRandomThought(num) {
    console.log(showerThoughts[num]);
}

printRandomThought(randomNum);