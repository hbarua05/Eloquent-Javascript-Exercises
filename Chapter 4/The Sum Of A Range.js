function range(start, end, step = 1) {
    let answer = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            answer.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            answer.push(i);
        }
    }
    return answer;
}

function sum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}
