console.log("Bienvenido, por favor, ingrese 3 numeros")
let numero1 = Number(prompt("Ingrese el primer numero:"))
let numero2 = Number(prompt("Ingrese el segundo numero:"))
let numero3 = Number(prompt("Ingrese el tercer numero:"))

let mayor = Math.max(numero1,numero2,numero3)
let menor = Math.min(numero1,numero2,numero3)
let centro = numero1 + numero2 + numero3 - mayor - menor

let sonIguales = (numero1 == numero2) && (numero2 == numero3) && (numero1 == numero3)

//numeros de mayor a menor
console.log("Los numeros de mayor a menor son: ", mayor,centro,menor)
//numeros de menor a mayor
console.log("Los numeros de menor a mayor son: ", menor,centro,mayor)

if (sonIguales) {
    console.log("Los numeros son iguales!")
}


