// EJERCICIO 3 HACKER-RANK

function compareTriplets(a, b){
    let p = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            p[0]++;
        }else if (a[i] != b[i]){
            p[1]++;
        }
        
    }
    return p;
}

// EJERCICIO 4 HACKER-RANK

// function aVeryBigSum(ar) {
//     return ar.reduce((acc, cur) => acc + cur);
// }
    