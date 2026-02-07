function solution(a, d, included) {
    return included.reduce(
        (sum, current, i) => current ? sum + a + i * d : sum,
    0)
}