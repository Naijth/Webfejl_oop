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
console.log(player0)
console.log(player0.getTierlevel())
player0.play()
player0.play()
player0.play()
player0.play()
console.log(player0)
console.log(player0.getTierlevel())
player0.play()
player0.play()
player0.play()
player0.play()
console.log(player0)
console.log(player0.getTierlevel())