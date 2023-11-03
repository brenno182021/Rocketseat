
    let a = 5;
    let b = 10;
    let soma = a + b;
    let c;

    if (soma > 10){
        console.log("soma > 10\n")
        c = -8;
        soma = a + c;
    }else{
        console.log('Soma <=10\n')
        c = 5;
        a = 2;
        soma = a - b + c;
    }

    b = 7;

    if(soma >= 5){
        console.log("soma >= 5\n")
        a = 3;
        soma = a + b - c;
        c = 0;
    }else{
        console.log("soma < 5\n")
        a = 1;
        soma = c - (a + b);
    }

    if(soma <= 0){
        console.log("soma <= 0\n")
    }else{
        console.log("soma > 0\n")
    }
