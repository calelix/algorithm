function solution(arr, queries) {
    const result = []

    for (const [s, e, k] of queries) {
        const candidates = arr
            .slice(s, e + 1)
            .filter((candidate) => candidate > k)

        result.push(
            candidates.length ? Math.min(...candidates) : -1
        )
    }

    return result
}