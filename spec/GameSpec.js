describe("Tic Tac Toe Game", function() {

    it("allows player X to start", function() {
        var game = new Game();

        expect(game.currentPlayer()).toEqual("X");
    });
    
    it("switches player after each turn", function() {
        var game = new Game();

        game.play();
        game.play();
        game.play();

        expect(game.currentPlayer()).toEqual("O");
    });

});