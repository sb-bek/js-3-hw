var fruit = ['apple', 'pear', 'apple', 'pear', 'lemon', 'banana', 'aplle', 'pear', 'banana', 'lemon', 'apple', 'apple', 'other']
var apple = 0;
var pear = 0;
var lemon = 0;
var banana = 0;
var other = 0;

for(let i = 0; i<fruit.length; i++){
    if (fruit[i]=="apple"){
        apple+=1
    }
    else if(fruit[i]=="pear"){
        pear+=1
    }
    else if(fruit[i]=="lemon"){
        lemon+=1
    }
    else if(fruit[i]=="banana"){
        banana+=1
    }
    else if(fruit[i]=="other"){
        other+=1
    }
    }

console.log({
apple:apple,
pear:pear,
lemon:lemon,
banana:banana,
other:other
});