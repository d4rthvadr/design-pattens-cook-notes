abstract class Game {
  protected numberOfPlayers: number = 0;
  protected currentPlayer = 0;
  constructor(numberOfPlayers: number) {
    this.numberOfPlayers = numberOfPlayers;
  }

  run() {
    this.start();
    while (!this.hasWinner) {
      this.takeTurn();
    }
    console.log(`Player ${this.winningPlayer} wins`);
  }

  abstract get hasWinner();

  abstract get winningPlayer();

  abstract start();

  abstract takeTurn();
}

class Chess extends Game {
  private maxTurns: number = 10;

  private currentTurn: number = 0;

  constructor(turn?: number) {
    super(2);
    if (turn) {
      this.currentTurn = turn;
    }
  }
  get hasWinner() {
    return this.currentTurn === this.maxTurns;
  }
  get winningPlayer() {
    return this.currentPlayer;
  }
  start() {
    console.log(
      `Starting a game of chess with ${this.numberOfPlayers} players`
    );
  }
  takeTurn() {
    this.currentTurn++;
    this.currentPlayer = (this.currentTurn + 1) & this.numberOfPlayers;
  }
}
