function snapCrackle(maxValue) {

    let text = "";

    for (let i = 1; i <= maxValue; i++) {

        if (i % 2 !== 0) {
            text += "Snap";
        }
        if (i % 5 === 0) {
            text += "Crackle";
        }
        if(i % 5 !== 0 && i % 2 === 0) {
            text += i;
        } 
        if(i < maxValue)
        {
            text += ", "
        }
        
    }
    return text

}
console.log(snapCrackle());

function PrimeNumbers(limit) {

    for (let i = 2; i < limit; i++) {
        if (limit % i === 0) {
            return false;

        }
    }
    return true
}


//Snap, Prime, SnapPrime, 4, SnapCracklePrime, 6, SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle
function snapCracklePrime(maxValue) {

    let text = "";

    for (let i = 1; i <= maxValue; i++) {

        if (i % 2 !== 0) {
            text += "Snap";
        }
        if (i % 5 === 0) {
            text += "Crackle";
        }
         
        if (i > 1 && PrimeNumbers(i) === true) {
            text = text + "Prime";
        }
        else if(i % 5 !== 0 && i % 2 === 0) {
            text += i;
        }
        if (i < maxValue) {
            text += ", "
        }


    }
    return text
}
console.log(snapCracklePrime());