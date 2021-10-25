class Javabuzz {
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "Javabuzz"
    }

    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }

    if (this.isDivisibleByThree(number)) {
      return "Java";
    }

    else {
      return number;
    }

  }
}
