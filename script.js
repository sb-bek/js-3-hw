//основное дз do..while



var input = prompt("Ведите свое имя")
var blackList = ['aya', 'anna', 'jack', 'john']



do{
    if(blackList.includes(input)){
        input = prompt('Введите имя')
    }else{
        alert(`Welcome ${input}`)
        break;
    }
}
while(true)
   
//доп дз 

for(var i = 0; i <= 20; i++){
    let fdhnew = i/2;
  let djd = fdhnew.toFixed(0);

    if(djd==fdhnew){
        console.log(i);
    }
}