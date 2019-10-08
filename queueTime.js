function queueTime(customers, n) {
    if (customers.length === 1) return customers[0]
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(0)
    }
    for (let x = 0; x < customers.length; x++) {
        arr[0] += customers[x]
        arr.sort((a, b) => a - b);
    }
    return arr[arr.length - 1]

}

customers = [5, 3, 4]
tils = 2

queueTime(customers, tils)