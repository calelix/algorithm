function solution(a, b) {
    const first = Number(`${a}${b}`);
    const second = Number(`${b}${a}`);
    const result = Math.max(first, second);
    
    return result
}