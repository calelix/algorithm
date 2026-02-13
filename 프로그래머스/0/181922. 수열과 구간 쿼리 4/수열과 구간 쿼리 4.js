function solution(arr, queries) {
    const result = [...arr]

    queries.forEach(([s, e, k]) => {
        let start = Math.ceil(s / k) * k
        for (let i = start; i <= e; i += k) {
            result[i] += 1
        }
    })

    return result
}