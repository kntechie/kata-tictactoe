function Game() {
    this.current_player = "X";
}

Game.prototype.currentPlayer = function() {
    return this.current_player;
}