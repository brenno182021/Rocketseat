 /*function unidade6() {
var valor, num, media, cont;
valor = 0;
cont = 0;
while(cont < 10){
    console.log(num);
    valor = valor + num;
    cont = cont + 1;
}
media = valor / cont;

return media;
}
const resultado = unidade6()
console.log(`A média é = ${resultado}`)


var i, j, x, vet;
vet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
x = 0;
    for(i = 1; i <= 14; i++){
        j = i + 1;
        vet[i] = j + (3 * i);
        if(i > 0){
            if(vet[j] < vet[i]){
                x = x + 2;
            }else{
                x = x - 1;
            }
        }
    }
    if(vet[5] > vet[10]){
        for(i = 5; i <=15; i++){
            vet[i] = vet[i] + 1;
        }
    }
    return vet;


var V = [2,1,4,3,0];
	
	for ( i = 0; i <= 3; i++)
	{
        console.log(i)
		for (j = 0; j <= 3 - i; j++)
		{
            console.log(j);
            console.log(V);
			if (V[j] > V[j + 1])
			{
				var a = V[j];
				V[j] = V[j + 1];
				V[j + 1] = a;
                console.log(a)
			}
		}
	}



const resultado = unidade6();

console.log(resultado)
*/