
let matrix = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ];

matrixRotation(matrix, 3);

function matrixRotation(matrix, r) {
    let mStart = 0;
    let nStart = 0;
    let m = matrix.length - 1;
    let n = matrix[0].length - 1;

    while (mStart < m && nStart < n) {
        let t = r;

        if (t > (((m-mStart) + (n-nStart)) * 2)) {
            t = t % (((m - mStart) + (n - nStart)) * 2);
        }

        while (t > 0) {
            let prev = matrix[mStart][nStart];

            // сдвинуть верхний ряд 
            for (let i = nStart; i <= n - 1; ++i) {
                matrix[mStart][i] = matrix[mStart][i + 1];
            }
            // сдвинуть крайний правый столбец
            for (let i = mStart; i <= m - 1; ++i) {
                matrix[i][n] = matrix[i + 1][n];
            }
            // сдвинуть нижнюю строку
            for (let i = n; i >= nStart + 1; --i) {
                matrix[m][i] = matrix[m][i - 1];
            }
            // сдвинуть крайний левый столбец
            for (let i = m; i > mStart + 1; --i) {
                matrix[i][nStart] = matrix[i - 1][nStart];
            }

            matrix[mStart + 1][nStart] = prev;
            t--;
        }
        mStart++;
        nStart++;
        m--;
        n--;
    }

    // print
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '))
    }
}