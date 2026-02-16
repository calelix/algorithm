function solution(l, r) {
    const result = []
    const max = String(r).length
    const queue = ["5"]
    
    while (queue.length) {
        const str = queue.shift()

        if (str.length > max) {
            continue
        }

        const num = Number(str)
        
        if (num >= l && num <= r) {
          result.push(num)
        }

        queue.push(str + "0")
        queue.push(str + "5")
    }

    return result.length ? result : [-1]
}