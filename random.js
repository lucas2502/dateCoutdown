'use strict'

//Array vazio para ser preenchido 
const arr = []
//Funcção para gerar numero aleatorio
const random = (low, high) => {
     return Math.floor(Math.random() * ( high - low))
}
//Inserir valores dentro de um array vazio
const createArr = ((arr, max) => {
    while(arr.length<max){
        arr.push( arr.length + 1 )
    }
})(arr, 60)
//Mostra array gerado
console.log("Array: ", arr)
//Array vazio para os 6 numeros que serão selecionados aleatoriamente
const randomNubemSelected = []
//Adiciona 6 numeros aleatorios ao array vazio
const selectNumber = ((newArr, arr) => {
    while(newArr.length < 6){
        newArr.push(arr[Math.floor(Math.random() * arr.length)])
    }
})(randomNubemSelected, arr)

console.log("Select Random Gold Number: ", randomNubemSelected  )