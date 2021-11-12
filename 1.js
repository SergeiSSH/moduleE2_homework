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
