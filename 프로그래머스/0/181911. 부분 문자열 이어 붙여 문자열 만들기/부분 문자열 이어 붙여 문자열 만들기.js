const solution = (my_strings, parts) => {
    return my_strings.reduce((acc, cur, index) => {
        const [start, end] = parts[index]

        return acc + cur.substring(start, end + 1)
    }, "")
}