function solution(my_string, k) {
    const result = Array.from({ length: k}, (_) => my_string).join("")
    return result
}