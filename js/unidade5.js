/*
function inicio(){
let i, j;
let a = 0;
for(i = 1; i <= 4; i++){
    j = 1;
    while (j < 3) {
        a = a + 2;
        j = j + 1;
    } 
}
return a;
}

const resultado = inicio();
console.log(resultado)


function mangaratiba(){
    let m, n, k;
    m = 18;
    n = 13;
    for(k = 1; k <= 4; k++){
        m = m - 1;
        n = n + 1;
        console.log(m,n)
    }
}


const resultado = mangaratiba();
console.log(resultado)



function sort(a,n){
    let i, j, min, x;
    
    for(i = 0; i < n - 1; i++){
        min = i;
        for(j = i + 1; j < n; j++){
            if (a[j].chave < a[min].chave){
                min = j;
                x = a[min];
                a[min] = a[i];
                a[i] = x;
            }
        }
    }
}
const array = [
{ chave: 64 },
{ chave: 25 },
{ chave: 12 },
{ chave: 22 },
{ chave: 11 }
];
sort(array, 5);
console.log("Vetor ordenado:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i].chave);
}
*/