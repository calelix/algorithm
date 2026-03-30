function solution(number) {
    const result = number.split("").reduce(
        (acc, cur) => {
            return (acc + Number(cur)) % 9
        }, 0
    )

    return result
}