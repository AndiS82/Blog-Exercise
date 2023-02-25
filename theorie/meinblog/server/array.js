let array1 = ['Fuchs', 'Kuh', 'Hasen']
let array2 = []
array2 = array1

let auto = {
    name: "Buzz"
}
let flitzer = auto
console.log(flitzer.name);
flitzer.name = 'Schnecke'
console.log(auto.name);

array2.pop()

console.log(array1);
let zahlA = 6
let zahlB = zahlA
zahlB = 89
console.log(zahlA);