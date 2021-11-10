//з.1_____________________________________________
let YouN = prompt('Введиет число:');
YouN = +YouN;
if (typeof YouN === 'number') {
    if (YouN != NaN){
        if (YouN%2 == 0) {
            console.log('Четное число');
        }else {
            console.log('Число нечетное');
        }
    }else {
        console.log('NaN');
    }
}else{
    console.log('Вы ошиблись')
};
//з.2______________________________________________
let x = 555;

if(typeof x === 'number'){
    console.log('x - число');
}else if(typeof x === 'string'){
    console.log('x - строка');
}else if(typeof x === 'boolean'){
    console.log('x - логический тип');
}else{
    console.log('Тип x не определён');
}
//з.3______________________________________________
let string = 'Hello'
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString(string))
//з.4______________________________________________
let rand = Math.round(Math.random(0,100)*(100))
console.log(rand)
