function solution(ineq, eq, n, m) {    
    const operator = {
        ">=": (n, m) => n >= m,
        ">": (n, m) => n > m,
        "<=": (n, m) => n <= m,
        "<": (n, m) => n < m,
    }
    
    return Number(operator[eq === "=" ? ineq + eq : ineq](n, m))
}