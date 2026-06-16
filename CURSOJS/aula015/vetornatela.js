let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
// console.log(valores)

// JEITO BURRO DE FAZER ABAIXO:
// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])


// Percurso para exibição de vetores:

/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/


// SO FUNCIONA PARA ARRAYS E OBJETOS
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}