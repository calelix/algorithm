function solution(code) {
    let mode = 0
    let ret = ""

    for (const [idx, char] of [...code].entries()) {
        if (char === "1") {
            mode ^= 1
            continue
        }
        
        if (idx % 2 === mode) {
            ret += char
        }
    }
    
    return ret ? ret : "EMPTY"
}