//ex 4-feito por Guilherme
//Conferindo idade
let idade = 3;
//Calculando e mostrando a idade do usuário
if(idade <=12){
    console.log("é uma criança")
}
else if(idade >= 13 && idade <= 18){
    console.log("é um adolescente")
}
else if(idade >= 19 && idade <= 60){
    console.log("é um adulto")
}
else{
    console.log("é um Idoso")
}

//ex 6-feito por Guilherme
//notas
let m1 = 6;
let m2 = 6;
let m3 = 6;
let m4 = 6;
let m5 = 6;
let m6 = 6;
let m7 = 6;
//calculando a média
let media = m1 + m2 + m3 + m4 + m5 + m6 + m7 / 7;
//Mostrando a média e informando se o aluno foi aprovado ou reprovado
console.log(media)
if(media >= 36){
    console.log("O Aluno foi aprovado!")
}else{
    console.log("O aluno foi reprovado!")
}