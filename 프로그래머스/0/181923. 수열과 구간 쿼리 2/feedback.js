function solution(arr, queries) {
    return queries.map(([s, e, k]) =>
        arr
            .slice(s, e + 1)
            .filter((n) => n > k)
            .sort((a, b) => a - b)[0] || -1
    )
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]))

/**
 * 1. slice(s, e + 1)
 *    - slice의 end 인덱스는 미포함이므로
 *      s ≤ i ≤ e 범위를 만들기 위해 e + 1을 사용한다.
 *
 * 2. filter(n => n > k)
 *    - k보다 큰 값만 남긴다.
 *
 * 3. sort((a, b) => a - b)
 *    - 숫자를 오름차순으로 정렬하기 위한 비교 함수
 *    - 기본 sort()는 문자열(사전식) 기준 정렬이므로
 *      예: [1, 2, 10].sort() → ["1", "10", "2"]
 *
 *    [sort 비교 함수 규칙]
 *    - 반환값 < 0 : a를 b보다 앞에 둔다
 *    - 반환값 > 0 : b를 a보다 앞에 둔다
 *    - 반환값 = 0 : 순서를 유지한다
 *
 *    → 오름차순 정렬 후 첫 번째 값([0])은
 *      k보다 큰 값 중 최솟값이 된다.
 *
 * 4. [0] || -1
 *    - filter 결과가 빈 배열이면 [0]은 undefined
 *    - undefined || -1 → -1
 *    - 즉, 조건을 만족하는 값이 없을 경우 -1 반환
 */
