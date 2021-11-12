let map1 = new Map();
map1.set('2','int');
map1.set('1.2','float');
map1.set('js','string');
map1.set('and','boolean');

for (let key of map1.keys()) {
    console.log(`ключ:${key}`); 
}
for (let elem of map1){
  console.log(`ключ,значение: ${elem}`);
}
