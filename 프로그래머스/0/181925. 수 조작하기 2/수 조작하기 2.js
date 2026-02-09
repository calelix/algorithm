const map = {
  "1": "w",
  "-1": "s",
  "10": "d",
  "-10": "a",
}

function solution(numLog) {
    const diff = numLog
        .slice(0, -1)
        .map((num, i) => numLog[i + 1] - num)

    return diff.map((num, i) => map[num]).join("")
}