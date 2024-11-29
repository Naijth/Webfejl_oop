function Player(nickname){
    this.nickname = nickname;
    this.playedMatch = 0;
}
Player.prototype.play = function(){
    this.playedMatch++;
    console.log(this.nickname + this.playedMatch)
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
player0.play()