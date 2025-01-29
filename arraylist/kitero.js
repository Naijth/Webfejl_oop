/**
function fun(param){
    console.log(param.value);
}

const chicken = fun;

const funA = function(param){
    console.log(param.value);
}

 * this is dogshit and should NEVER be used
const funB = function(){
    console.log(this.value);
}
const egg = funB.bind({value: 'crack wagon'});

const funC = (param) => {
    console.log(param.value);
}

const obj = {
    funA: (param) => console.log(param.value),
    funB: (param) => console.log(param.age)
}

const pers = {
    value: 'aqywesxrdctfvzgbuhnijsdrftgzhuijedrftgzhujesdfrtgzhderftgzhudefrtgzhjudefrtgzhujifrtgzuji',
    age: 0
}

fun({value: 'Cirmi'});
chicken({value: 'shagger'});
funA({value: 'kolbászos kenyér'});
egg(); // this is dogshit and should NEVER be used
funC({value: 'I will cum'});
obj.funA(pers);
obj.funB(pers);
*/