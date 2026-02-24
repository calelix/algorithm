function solution(arr) {
    return arr.reduce((acc, cur) => {
        while(acc.length && acc.at(-1) >= cur) {
            acc = acc.slice(0, -1)
        }
        return [...acc, cur]
    }, [])
}