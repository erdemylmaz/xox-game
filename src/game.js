class Game {
  x;

  players = {
    // player 1
    firstPlayer: "Erdem",
    firstPlayersWord: "X",
    isFirstPlayersTurn: true,

    // player 2
    secondPlayer: "E",
    secondPlayersWord: "O",
    isSecondPlayersTurn: false,
  };

  contents = [
    // first line

    { content: "" },
    { content: "" },
    { content: "" },

    // second line

    { content: "" },
    { content: "" },
    { content: "" },

    // third line
    { content: "" },
    { content: "" },
    { content: "" },
  ];
  onClick = (button) => {
    this.x = parseInt(button.target.id);

    if (this.players.isFirstPlayersTurn) {
      for (let x = 0; x < this.contents.length; x++) {
        if (this.x - 1 === x && this.contents[this.x - 1].content === "") {
          this.contents[this.x - 1].content = this.players.firstPlayersWord;

          this.players.isFirstPlayersTurn = false;
          this.players.isSecondPlayersTurn = true;
        }
      }
    } else if (this.players.isSecondPlayersTurn) {
      for (let x = 0; x < this.contents.length; x++) {
        if (this.x - 1 === x && this.contents[this.x - 1].content === "") {
          this.contents[this.x - 1].content = this.players.secondPlayersWord;

          this.players.isSecondPlayersTurn = false;
          this.players.isFirstPlayersTurn = true;
        }
      }
    }
  };

  restartGame = () => {
    for (let x = 0; x < this.contents.length; x++) {
      this.contents[x].content = "";
      this.players.isFirstPlayersTurn = true;
      this.players.isSecondPlayersTurn = false;
    }
  };

  update = () => {
    // first lines won
    if (
      this.contents[0].content === this.contents[1].content &&
      this.contents[1].content === this.contents[2].content &&
      this.contents[0].content !== "" &&
      this.contents[1].content !== "" &&
      this.contents[2].content !== ""
    ) {
      if (this.players.isSecondPlayersTurn) {
        alert("First Player Won");
        this.restartGame();
      } else {
        alert("Second Player Won");
        this.restartGame();
      }
    }

    // second lines won
    if (
      this.contents[3].content === this.contents[4].content &&
      this.contents[4].content === this.contents[5].content &&
      this.contents[3].content !== "" &&
      this.contents[4].content !== "" &&
      this.contents[5].content !== ""
    ) {
      if (this.players.isSecondPlayersTurn) {
        alert("First Player Won");
        this.restartGame();
      } else {
        alert("Second Player Won");
        this.restartGame();
      }
    }

    // third lines won
    if (
      this.contents[6].content === this.contents[7].content &&
      this.contents[7].content === this.contents[8].content &&
      this.contents[6].content !== "" &&
      this.contents[7].content !== "" &&
      this.contents[8].content !== ""
    ) {
      if (this.players.isSecondPlayersTurn) {
        alert("First Player Won");
        this.restartGame();
      } else {
        alert("Second Player Won");
        this.restartGame();
      }
    }

    // first columuns won
    if (
      this.contents[0].content === this.contents[3].content &&
      this.contents[3].content === this.contents[6].content &&
      this.contents[0].content !== "" &&
      this.contents[3].content !== "" &&
      this.contents[6].content !== ""
    ) {
      if (this.players.isSecondPlayersTurn) {
        alert("First Player Won");
        this.restartGame();
      } else {
        alert("Second Player Won");
        this.restartGame();
      }
    }

    // second columuns won
    if (
      this.contents[1].content === this.contents[4].content &&
      this.contents[4].content === this.contents[7].content &&
      this.contents[1].content !== "" &&
      this.contents[4].content !== "" &&
      this.contents[7].content !== ""
    ) {
      if (this.players.isSecondPlayersTurn) {
        alert("First Player Won");
        this.restartGame();
      } else {
        alert("Second Player Won");
        this.restartGame();
      }
    }

    // third columuns won
    if (
      this.contents[2].content === this.contents[5].content &&
      this.contents[5].content === this.contents[8].content &&
      this.contents[2].content !== "" &&
      this.contents[5].content !== "" &&
      this.contents[8].content !== ""
    ) {
      if (this.players.isSecondPlayersTurn) {
        alert("First Player Won");
        this.restartGame();
      } else {
        alert("Second Player Won");
        this.restartGame();
      }
    }

    // top left to bottom right / bottom right to top left
    if (
      this.contents[0].content === this.contents[4].content &&
      this.contents[4].content === this.contents[8].content &&
      this.contents[0].content !== "" &&
      this.contents[4].content !== "" &&
      this.contents[8].content !== ""
    ) {
      if (this.players.isSecondPlayersTurn) {
        alert("First Player Won");
        this.restartGame();
      } else {
        alert("Second Player Won");
        this.restartGame();
      }
    }

    // top right to bottom left
    if (
      this.contents[2].content === this.contents[4].content &&
      this.contents[4].content === this.contents[6].content &&
      this.contents[2].content !== "" &&
      this.contents[4].content !== "" &&
      this.contents[6].content !== ""
    ) {
      if (this.players.isSecondPlayersTurn) {
        alert("First Player Won");
        this.restartGame();
      } else {
        alert("Second Player Won");
        this.restartGame();
      }
    }
  };
}

export default Game;
