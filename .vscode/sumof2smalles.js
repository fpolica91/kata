

// FIND THE SUM OF THE 2 SMALLEST INTEGERS IN AN ARRAY

function sumTwoSmallestNumbers(numbers) {
    const sorted = numbers.sort((a, b) => a - b).slice(0, 2)
    return sorted.reduce((a, b) => a + b, 0)
}
