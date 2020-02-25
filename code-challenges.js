// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const fibo = (num) =>{
    //declare a empty array
    let arr = []
    //loop to generate array items
    for(let i = 0; i < num; i++){
        //first two values of the array is 1
        if (arr.length < 2){
            arr.push(1)
        }
        // push the rest elements into the array which is the sum of two numbers before
        else {
            arr.push(arr[i-2]+arr[i-1])
        }
    }
    //output the generated array
    return arr
}

console.log(fibo(10))



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
const oddSorted = (arr) =>{
    //find the items which are numbers and odd in the input array, then sort in ascending order
    return arr.filter(value => (typeof(value) === "number")&&(Math.abs(value)%2 ===1)).sort(function(a, b){return a - b})
}
console.log(oddSorted(fullArr1))
console.log(oddSorted(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”
const middleLetter = (string) => {
    //store the length of the word
    let n = string.length
    //if the length is even
    if (n%2 === 0){
        //return two middle letters
        return string.charAt(n/2 - 1) + string.charAt(n/2)
    }else{
        //if the length is odd, return 1 middle letter
        return string.charAt((n-1)/2)
    }
}
console.log(middleLetter(middleLetters1))
console.log(middleLetter(middleLetters2))




// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
//declare a sphere class
class Sphere{
    //create radi object
    constructor(radi){
        this.radi = radi
    }
    //create a method to calculate the area
    area () {
        return 4*Math.PI*this.radi**2
    }
}
//use sphere class to create 3 sphere objects
let firstSphere = new Sphere(10)
let secondSphere = new Sphere(66)
let thirdSphere = new Sphere(875)
console.log(firstSphere.area())
console.log(secondSphere.area())
console.log(thirdSphere.area())


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const sumArr = (array) =>{
    //declare a sum variable starting from zero
    let sum = 0
    //use map to add each value to the sum, then return a array of sums
    return array.map(value =>{
        sum = sum + value
        return sum
    })
}

console.log(sumArr(numbersToAdd1))
console.log(sumArr(numbersToAdd2))
console.log(sumArr(numbersToAdd3))