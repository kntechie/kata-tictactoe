describe("Tic Tac Toe Game", function() {

    it("allows player X to start", function() {
        var game = new Game();

        expect(game.currentPlayer()).toEqual("X");
    });

});