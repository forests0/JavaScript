let world1 = "hello"
let world2 = "world"

console.log(`${world1}+${world2}`)

document.getElementById("ex-el").innerText = `${world1} + ${world2}`

const player = {
    name : "Lebron James",
    club : "LA Lakers",
    address : {
        city : "Los Angeles",
    }
}

//
console.log(player.address.city)

const {name, club, address : {city}} = player;

console.log(`${name} plays for ${club}`)
console.log(`${name} lives in ${city}`)

let [firstname, lastname] = ['Seongho', 'cho']
lastname = 'Kim'
console.log(lastname)


function addressMaker(city, state) {
    //const Newaddress = {city : city, state : state}
    const Newaddress = {city, state}
    console.log(Newaddress)
}

addressMaker('Austin', 'Texas')

let incomes = [62000,67000,75000]
let total = 0


//다른 for문들-----
for(const income of incomes) {
    console.log(income)
    total += income
}

console.log(total)

let Fullname = "BSSM is one of the best schools in Busan!"

for(const char of Fullname) {
    console.log(char)
}

//Spread Operator-----

let contacts = ["Mary", "Joel", "Danny"]
//let personalFriends = ["David", "Mary", "Joel", "Danny", "Lily"]
let personalFriends = ["David",...contacts, "Lily"]

console.log(personalFriends)

contacts.push("John")
console.log(contacts)
console.log(personalFriends)

let person = {
    name : "Adam",
    age : 25,
    city : "Manchester"
}
/*
let employee = {
    name : "Adam",
    age : 25,
    city : "Manchester",
    salay : 5000,
    position : "Software Developer"
}
*/

let employee = {
    ...person,
    salay : 5000,
    position : "Software Developer"
}

//Rest Operator

function add(...nums) {
    console.log(nums)
}

add(4,5,9,7,1,3,5)
//JS는 배열 마지막의 ,를 인정해줌

//Function Declaration-----
function BreakfastMenu() {
    return "I'm going to scrabled eggs for breakfast"
}
//Anonymous Function-----
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch"
}

//Arrow Function-----
const dinnerMenu = (food) => {
    return `I'm going to eat a ${food} for dinner`
}
const dinnerMenu2 = (food) => `I'm going to eat a ${food} for dinner`
//인자가 하나일 경우, 괄호 생략 가능(2개부터 안됨)

//기본값------------------
function say(message = "hello") {
    console.log(message)
}

say("HI")
say()

//includes---------------
const array1 = [1,2,3]

console.log(array1.includes(2))

const pets = ['Dog', 'Cat', 'Rat']

console.log(pets.includes('Rabbit'))

let example = "Wah"

console.log(example.padStart(10, 'W'))
console.log(example.padEnd(10, 'h'))

//Class------------

class Animal {
    constructor(type,legs) {
        this.type = type
        this.legs = legs
    }
    Makenoise(sound = "Load Noise") {
        console.log(sound)
    }
    get type() {
        return this._type
    }
    set type(str) {
        this._type = str
    }
    static return10() {
        return 10
    }
}


class Cat extends Animal {
    constructor(type,legs,tail) {
        super(type,legs)
        this.tail = tail
    }
    Makenoise(sound = "Meow") {
        console.log(sound)
    }
}

let cat = new Cat('Cat', 4, 1)
let dog = new Animal("dog", 4)
dog.Makenoise("Bark! Bark!")
console.log(dog.type)
console.log(Animal.return10)
cat.Makenoise()


//Promise----------------
const BuyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const error = false
            if(error) {
                reject("Sorry, Your payment was not successful")
            }
            else {
                resolve("Thank you, you payment was successful")
            }
        }, 3000) 
    })
}
//error = false
BuyFlightTicket().then((success) => console.log(success) )
//error = true
BuyFlightTicket().catch((error) => console.log(error))

BuyFlightTicket
.then((success) => console.log(success))
.catch((error) => console.log(error))

//API끌어오기--------------------
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


//async await
const photos = []

async function photoUpload() {
    let uploadstatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push("Profile Pic")
            resolve("Photo Uploads")
        }, 3000)
    })
    let result = await uploadstatus
    console.log(result)
    console.log(photos.length)
}

photoUpload()

const exampleTest =new Set( [1,1,1,1,2,2,2,3])
exampleTest.add(5)
exampleTest.add(3).add(17)

console.log(exampleTest.delete(5))
console.log(exampleTest.has(17))
console.log(exampleTest)
