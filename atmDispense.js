const denominations = [2000, 500, 200, 100];  // Possible Denominations(Should always be in descending order)
const denominationsCount = [5, 7, 2, 4]; // Denominations available count
//Keep both array counts equal

const totalDenominations = denominations.length;

/**
 * @Description Get denominations counts as per denomination's availability
 * @input amount
 */

const getDenomincationsCount = (amount) => {
    if (amount % totalDenominations != 0 || amount < 0) {
        return false;
    }
    resultDomninationCount = [];
    total = amount;
    grossTotal = 0;
    for (let i = 0; i < totalDenominations; i++) {
        countRequired = Math.floor(total / denominations[i]);
        if (denominationsCount[i] >= countRequired) { //Check if denomination's required count is available or not
            resultDomninationCount.push(countRequired)
            total = total % denominations[i];
            grossTotal = grossTotal + (countRequired * denominations[i])
        } else {
            resultDomninationCount.push(0)
        }
    }
    if (grossTotal == amount) { //Check if the total amount formed is equal to the amount provided.
        return resultDomninationCount;
    } else {
        return false;
    }
}

let finalCount = getDenomincationsCount(1500) //Run function for input amount

if (finalCount) {
    for (let i = 0; i < totalDenominations; i++) {
        console.log(`Dispense ${finalCount[i]} of ${denominations[i]} denominations`);
    }
} else {
    console.log(`Denominations not available for input amount!`);
}