class GuessingGame {
    constructor() { }
    ;
    setRange(min, max) {
        this.rangeMin = min;
        this.rangeMax = max;
        this.lastGuess = Math.round((this.rangeMin + this.rangeMax) / 2);
    }

    guess() {
        this.lastGuess = Math.round((this.rangeMin + this.rangeMax) / 2);
        return this.lastGuess;
    }

    lower() {
        this.rangeMax = this.lastGuess
    }

    greater() {
        this.rangeMin = this.lastGuess
    }
}

module.exports = GuessingGame;
