
var numbers = []
var rand = []
var i = 1;
do{
    numbers.push(i)
    i++
}while( i <= 60)

console.log('numbers', numbers)

for(var j = 0; j < 6; j++){
     rand.push(numbers[Math.floor(Math.random() * numbers.length)])    
}

console.log('rand', rand)
