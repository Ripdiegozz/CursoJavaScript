// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
// https://processing.org/tutorials/2darray

function staircase(n) {
    // Write your code here
    for (let i=1; i <= n; i++){
        let ar = '';
        for (let j=0; j < n; j++)
            if (j<n-i){
                ar+=' ';
            }else{
                ar+='#';
            }
    console.log(ar)         
    }
    
}

staircase(10);