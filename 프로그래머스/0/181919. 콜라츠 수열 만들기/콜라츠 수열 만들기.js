function collatz(n) {
    return n % 2 === 0 ? n / 2 : 3 * n + 1
}

function solution(n) {
    const result = [n]

    while (n !== 1) {
        n = collatz(n)
        result.push(n)
    }

    return result
}