function Game() {
    this.current_player = "X";
}

Game.prototype.currentPlayer = function() {
    return this.current_player;
}

Game.prototype.play = function() {
    if (this.currentPlayer() === "X") {
      this.current_player = "O"
    } else {
      this.current_player = "X"
    }
}