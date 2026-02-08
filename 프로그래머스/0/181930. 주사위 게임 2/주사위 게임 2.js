function solution(a, b, c) {
    const sum = a + b + c
    const squareSum = (a * a) + (b * b) + (c * c)
    const cubeSum = (a * a * a) + (b * b * b) + (c * c * c)

    const set = new Set([a, b, c])
    const setSize = set.size

    if (setSize === 1) {
        return sum * squareSum * cubeSum
    }

    if (setSize === 2) {
        return sum * squareSum
    }

    return sum
}