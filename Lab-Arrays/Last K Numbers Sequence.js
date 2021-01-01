function solve(n, k) {

    let sequence = [1];
    for (let i = 1; i < n; i++) {

        let nextElement = 0;
        if (sequence.length >= k) {

            for (let j = k; j > 0; j--) {
                let index = sequence.length - j;
                nextElement += sequence[index];
            }
        } else {

            nextElement = sequence.reduce((a, b) => a + b);
        }
        sequence.push(nextElement);
    }
    console.log(sequence.join(' '));
}
solve(8, 2);