// console.log ("hello world") 

// let thing= "shimmy"
// thing = "cocopuffs"
// console.log (thing)
// // use camel case for multiple words
// // cmd B opens sidebar
// const newThing = 10
// console.log (newThing)

// const firstName = "RJ"
// let age = 24
// let isCool = true

// // console.log(`Name: ${firstName}. Age: ${age}.`)
// // if(isCool === true) {
// //     console.log("This person is pretty dope")
// // } else { 
// //     console.log("this person needs to git good")
// // }

// if(isCool && age > 17){
//     console.log("this person is still cool and isnt even a kid")
// } else if(isCool) {
//     console.log("This person is cool, but that's to be expected")
// } else {
//     console.log("they aren't cool :(")
// }


// let a = 17
// let b = 5
// let c = 2
// let x = 20

// let answer = a + (c * b)
// console.log(answer)

const readline = require('readline')

const reader = readline.createInterface({input: process.stdin, output: process.stdout}) //Learn how this works later

// reader.question("hey there! What's your name?", function(response) {
//     console.log('Hello ${response}')
// })

reader.question("let me guess a number! Pick a number between 1-10.", function(num) {
   if(num >= 1 && num <= 10)
    console.log('Hmmm.. I think your number was ${num}.')
    else {
        console.log("HEY! I said between 1 and 10")
    }
})