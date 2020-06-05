let randText = ''

const genRandomNumbers = () => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);

  randText = "The random numbers are: "
  for (var i = 0; i < array.length; i++) {
    randText += array[i] + " ";
  }
}

genRandomNumbers()

console.log(randText)