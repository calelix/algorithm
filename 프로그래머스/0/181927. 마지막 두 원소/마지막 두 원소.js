function solution(num_list) {
    const last = num_list.at(-1)
    const previous = num_list.at(-2)

    const nextValue = last > previous ? last - previous : last * 2

    return [...num_list, nextValue]
}