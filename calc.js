function add(array) {
    let length = array.length
    let total = 0
    for (i=0; i<length; i++) {
        total += array[i]
    }
    return total;
}
function subtract(array) {
    let length = array.length
    let total = array[0]
    for (i=1; i<length; i++) {
        total -= array[i]
    }
    return total;
}
function multiply(array) {
    let length = array.length
    let total = array[0]
    for (i=1; i<length; i++) {
        total *= array[i]
    }
    return total;
}
function divide(array) {
    let length = array.length
    let total = array[0]
    for (i=1; i<length; i++) {
        total /= array[i]
    }
    return total;
}