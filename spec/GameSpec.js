describe("Tic Tac Toe Game", function() {

    var game;

    beforeEach(function() {
        game = new Game();
    })

    it("allows player X to start", function() {
        expect(game.currentPlayer()).toEqual("X");
    });
    
    it("switches player after each turn", function() {
        game.play();
        game.play();
        game.play();

        expect(game.currentPlayer()).toEqual("O");
    });

});