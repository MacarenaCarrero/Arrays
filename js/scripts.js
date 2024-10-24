//primero

const randomNumber = (array) => {
  const randomPosition = Math.floor(Math.random() * array.length);

  console.log(array[randomPosition]);
};

randomNumber([2, 3, 4, 6, 8]);

//ejemplo segundo
const higestAndLower = (num1, num2, num3) => {
  let mayor;
  let menor;

  if (num1 > num2 && num1 > num3) {
    mayor = num1;
  } else if (num2 > num1 && num2 > num3) {
    mayor = num2;
  } else if (num3 > num2 && num3 > num1) {
    mayor = num3;
  }

  if (num1 < num2 && num1 < num3) {
    menor = num1;
  } else if (num2 < num3 && num2 < num1) {
    menor = num2;
  } else if (num3 < num2 && num3 < num1) {
    menor = num3;
  }
  console.log("El mayor es", mayor);
  console.log("El menos es ", menor);
};

higestAndLower(1, 2, 3);

//segundo /me falta el numero es el mayor y el menor

const operations = (numbers) => {
  const num1 = numbers[0];
  const num2 = numbers[1];
  const num3 = numbers[2];
  const mayor = Math.max(num1, num2, num3);
  const menor = Math.min(num1, num2, num3);

  const addition = num1 + num2 + num3;
  const average = (num1 + num2 + num3) / 3;

  console.log("La suma de todos los números es " + addition);
  console.log("La media de todos los números es " + average);
  console.log("EL mayor es", mayor, " y el menor es ", menor);
};

operations([3, 7, 5]);
operations([8, 6, 4]);

//tercero

const aleatoryNumber = (numbers) => {
  const randomNumber = Math.floor(Math.random() * 11);

  if (numbers.includes(randomNumber)) {
    console.log(
      "El numero " +
        randomNumber +
        " está en la posición " +
        numbers.indexOf(randomNumber)
    );
  } else {
    console.log("El numero " + randomNumber + " no esta en el array");
  }
};

aleatoryNumber([5, 3, 6, 7, 2]);

//cuarto

const empty = (num1, num2, num3) => {
  const randomPosition = Math.floor(Math.random() * 101);
  const randomPosition2 = Math.floor(Math.random() * 101);
  const randomPosition3 = Math.floor(Math.random() * 101);

  console.log(randomPosition + randomPosition2 + randomPosition3);
};

empty([]);

//quinto

const dniLetter = (dni) => {
  const letters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  const position = dni % 23;

  console.log(dni + letters[position]);
};

dniLetter("70420330");

//sexto

const getArrayInitials = (words) => {
  const initialFirstWord = words[0].charAt(0).toUpperCase();
  const endFirstWord = words[0].charAt(words[0].length - 1).toUpperCase();

  const initialSecondWord = words[1].charAt(0).toUpperCase();
  const endSecondWord = words[1].charAt(words[0].length - 1).toUpperCase();

  const initial3dWord = words[2].charAt(0).toUpperCase();
  const end3Word = words[2].charAt(words[0].length - 1).toUpperCase();

  const newLetters = [];
  newLetters.push(
    initialFirstWord,
    endFirstWord,
    initialSecondWord,
    endSecondWord,
    initial3dWord,
    end3Word
  );

  console.log(newLetters);
};

getArrayInitials(["maca", "hola", "adios"]);

//septimo

const peersNumbers = (numbers) => {
  let count = 0;
  const num1 = numbers[0];
  const num2 = numbers[1];
  const num3 = numbers[2];

  if (num1 % 2 === 0) {
    count++;
  }
  if (num2 % 2 === 0) {
    count++;
  }
  if (num3 % 2 === 0) count++;

  console.log("El array tiene " + count + " numeros pares.");
};

peersNumbers([2, 5, 8]);

//octavo

const reverseNumbers = (numbers) => {
  const num1 = numbers[0];
  const num2 = numbers[1];
  const num3 = numbers[2];

  const newOrder = [];
  newOrder.push(num3, num2, num1);
  return newOrder;
};

const resultNewOrder = reverseNumbers([5, 4, 3]);
console.log(resultNewOrder);

//noveno

const reverseWords = (words) => {
  const word1 = words[0].toUpperCase();
  const word2 = words[1].toUpperCase();
  const word3 = words[2].toUpperCase();

  const wordsToUpper = [];
  wordsToUpper.push(word1, word2, word3);
  return wordsToUpper;
};

const resultWordsToUpper = reverseWords(["hola", "adios", "gato"]);
console.log(resultWordsToUpper);
