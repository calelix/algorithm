function solution(a, b, c, d) {
    const dice = [a, b, c, d]

    const count = {}
    for (const num of dice) {
        count[num] = (count[num] || 0) + 1
    }

    const keys = Object.keys(count).map(Number)
    const values = Object.values(count)

    if (values.length === 1) {
        return 1111 * keys[0]
    }

    if (values.length === 2) {
        if (values.includes(3)) {
            const p = keys.find(key => count[key] === 3)
            const q = keys.find(key => count[key] === 1)
            return (10 * p + q) ** 2
        }
        return (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1])
    }

    if (values.length === 3) {
        const singles = keys.filter(key => count[key] === 1)
        return singles[0] * singles[1]
    }

    return Math.min(...dice)
}