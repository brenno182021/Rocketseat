let res, cont, x, n;
cont = 1;
res = 0;
x = 2;
n = 4;

while (cont >= n){
    res = res * x;
    cont = cont + 1;
    console.log(res);
}
console.log(res)