

// FIND THE SUM OF THE 2 SMALLEST INTEGERS IN AN ARRAY

function sumTwoSmallestNumbers(numbers) {
    const sorted = numbers.sort((a, b) => a - b).slice(0, 2)
    return sorted.reduce((a, b) => a + b, 0)
}

// THIS TO ME IS A CLEVER ANSWER
function sumTwoSmallestNumbers(numbers) {
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;

    var n;
    for (i = 0; i < numbers.length; i++) {
        n = numbers[i];
        if (n < min) {
            secondMin = min;
            min = n;
        } else if (n < secondMin) {
            secondMin = n;
        }
    }

    return min + secondMin;
}