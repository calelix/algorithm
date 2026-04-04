function solution(my_string, queries) {
    return queries.reduce(
        (acc, [s, e]) => {
            const prefix = acc.slice(0, s)
            const middle = acc.slice(s, e + 1)
            const suffix = acc.slice(e + 1)

            return prefix
                + middle.split("").reverse().join("")
                + suffix
        }, my_string
    )
}