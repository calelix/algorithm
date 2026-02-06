function solution(n) {
    const arr = Array.from({ length: n + 1}, (_, i) => i)

    const condition = n % 2 !== 0

    return condition ?
        arr
        .filter((e) => e % 2 !== 0)
        .reduce((acc, cur) => acc + cur, 0)
        :
        arr
        .filter((e) => e % 2 === 0)
        .reduce((acc, cur) => acc + cur * cur, 0)
}