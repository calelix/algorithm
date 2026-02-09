function solution(n, control) {
    const map = {
        "w": 1,
        "s": -1,
        "d": 10,
        "a": -10,
    }

    return [...control].reduce(
        (acc, cur) => acc + map[cur],
        n
    )
}