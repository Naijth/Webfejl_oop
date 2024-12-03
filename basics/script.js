class Player{
    constructor(nickname) {
        this.nickname = nickname;
        this.playedMatch = 0;
    }
}
Player.prototype.play = function(){
    this.playedMatch++;
}
Player.prototype.getTierlevel = function(){
    if (this.playedMatch < 4){
        return "A";
    } else if (this.playedMatch < 7){
        return "B";
    } else{
        return "C";
    }
}
const player0 = new Player("gomszab")
player0.play()
console.log(player0)
console.log(player0.getTierlevel())

class Person{
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
const person0 = new Person("Géza")

class Student extends Person{
    constructor(school) {
        this.school = school;
    }
}
console.log(person0.getName())