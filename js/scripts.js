//primero

const randomNumber = (array) =>{
const randomPosition = Math.floor(Math.random() * array.length);

console.log (array[randomPosition]);

}

randomNumber([2,3,4,6,8])

//segundo /me falta el numero es el mayor y el menor

const operations = (numbers) =>{
    const num1= numbers[0];
    const num2= numbers[1];
    const num3= numbers[2];
    
    const addition= num1 + num2 +num3;
    const average= (num1 + num2 +num3)/3;

  
    console.log("La suma de todos los números es " + addition);
    console.log("La media de todos los números es " + average);
    
}

operations([3,7,5])
operations([8,6,4])


//tercero

const aleatoryNumber =(numbers)=> {

const numbersRandom = Math.floor(Math.random()* 11)

console.log(numbersRandom)

}

aleatoryNumber(5,3,6,7,2)
