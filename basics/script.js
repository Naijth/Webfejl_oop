/**
 * In this part we use the prototype to create functions for the "Player" class, where each time the play function gets used it increases the "playedMatch" variable by one
 * and the "getTierLevel" fuction writes out "A", "B" or "C" into the console, given it meets the amount of "playedMatch"-es rquired.
*/
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

/** 
 * Here we just put the functions inside the class, in this case "getName" just returns the "name" variable. Truly sweating my ass off after this one.
*/
class Person{
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

/**
 * Using the  "super" keyword we pull a Romania on the parent of our new class to steal it's constructor, that we defined with "extends". Surely there's a method to make 
 * this look 50 fuckin times harder and uglier, I am just too lazy to figure it out plus the teach might yell at me for creating an unholy abomination.
 */
class Student extends Person{
    constructor(name, school) {
        super(name);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}
const person0 = new Student("Géza", "Bolyai")
console.log(person0.getName())
console.log(person0.getSchool())

/**
 * At this rate the album I am listening to has started it's second loop, much wows. What is more important is that within this section the only important thing that is going
 * on is absolutely nothing. I just used my previous knowledge to make this combination of classes n' shit. Not out of my own volition of course, if it wasn't requested by
 * the teach I'd have left it there. Can't wait for HolyC.
 */
class Animal{
    constructor(species, name){
        this.species = species;
        this.name = name;
        //Fyi teach. I know you are reading this. The reason the sound making is missing is because it has no reason to exist.
    }
    animalDo(){
        console.log("This animal's name is " + this.name + " and it's from the " + this.species + " species. It " + this.movementType + " and can make sounds.")
    }
}
class Mammal extends Animal{
    constructor(species, name){
        super(species, name)
        this.movementType = "walks";
    }
}
class Bird extends Animal{
    constructor(species, name){
        super(species, name)
        this.movementType = "flies";
    }
}
const animal0 = new Bird("great tit", "Kálmán")
const animal1 = new Mammal("porcupine", "Flat Tire")
animal0.animalDo()
animal1.animalDo()