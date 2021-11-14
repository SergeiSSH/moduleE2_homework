let somenum = [9,6,3,1,4,6,86,0,6,'q',''];
let even = 0;
let odd = 0;
let zero = 0;

somenum.forEach(function(item, index, array) {
    if (typeof item == 'number') {
        if (item == 0) {
            zero += 1;
        }else{
            if (item%2 ==0){
                even += 1;
            }else {
                odd += 1;
            }
        }
    }else {
        console.log(index+'№ не число')
    }
})
console.log('Чётных чисел: '+even);
console.log('Нечётных чисел: '+odd);
console.log('Нулей: '+zero); 
