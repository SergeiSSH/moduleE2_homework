let somenumbers = [4,5,8,9,0,2,8];
let result = false;

for (i = 0; i < somenumbers.length; i++){
    for (n = 0; n < somenumbers.length; n++){
        if (somenumbers[i] == somenumbers[n] && i != n){
            result = true;
            break;
        }
    }
    if (result == true) {
            break;
    }
}
console.log(result);
