const num = Number(prompt('Digite um número:'))

if(num%2===0){
    if(num%3===0){
        console.log('O número é divisível por 2 e por 3')
    }else{
        console.log('O número é divisível somente por 2')
    }
}else{
    console.log('O número não é divisível nem por 2 e nem por 3')
}

if(num%2===0 && num%3===0){
    console.log('O número é divisível por 2 e por 3')
}else if(num%2===0 || num%3===0){
    console.log('O número é divisível por 2 ou por 3')
}else{
    console.log('O número não é divisível nem por 2 e nem por 3')
}