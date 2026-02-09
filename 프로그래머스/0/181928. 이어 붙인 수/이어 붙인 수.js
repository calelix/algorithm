function solution(num_list) {
    const { even, odd } = num_list.reduce(
        (acc, cur) => {
            if (cur % 2 === 0) {
                acc.even += cur
            } else {
                acc.odd += cur
            }
            return acc
        },
        { even: "", odd: "" }
    )

    return Number(even) + Number(odd)
}