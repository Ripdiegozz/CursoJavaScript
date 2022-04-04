let array = [];

function generarArray(tope) {
    for (let i = 1; i <= tope; i++) {
        if (i%2 == 0) {
            array.push(i);
        }
    }
    return(console.log(array));
}

generarArray(20);   
