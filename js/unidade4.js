/*let num = 2;

console.log(num);
if ((num % 2) !== 0){
    console.log("X");
}else{
    console.log("Y")
}
*/

function recursiva(v, n){
     if (n===0){
        return 0;
    }else{
        let s;
         s = recursiva(v, n-2);
        if (v[n - 1] > 0){
            s = s + v[n - 2];
        }
        return s;
    }
}

const array = [1, -5, 4, 0, -3, 4];
const resultado = recursiva(array, 6);
console.log(`Resultado: ${resultado}`);