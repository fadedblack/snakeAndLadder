function printDice1() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃        ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃        ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice2() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤      ┃\n';
  box += '┃        ┃\n';
  box += '┃     ⬤  ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice3() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃⬤       ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃      ⬤ ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice4() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┃        ┃\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice5() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice6() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃⬤  ⬤  ⬤ ┃\n';
  box += '┃        ┃\n';
  box += '┃⬤  ⬤  ⬤ ┃\n';
  box += '┗━━━━━━━━┛';

  return box;
}

function printDice(diceNumber) {
  switch (diceNumber) {
    case 1: return printDice1();
    case 2: return printDice2();
    case 3: return printDice3();
    case 4: return printDice4();
    case 5: return printDice5();
    case 6: return printDice6();
  }
}

function dice() {
  let diceValue = Math.random() * 6;
  diceValue = Math.ceil(diceValue);

  return diceValue;
}

function snakeOrLadder(currentPlayerPos) {
  switch (currentPlayerPos) {
    case 5: return 58;
    case 14: return 59;
    case 38: return 20;
    case 42: return 60;
    case 45: return 7;
    case 51: return 10;
    case 53: return 72;
    case 64: return 83;
    case 65: return 54;
    case 75: return 94;
    case 91: return 73;
    case 97: return 3;
    default: return currentPlayerPos;
  }
}

function createMessageBox(message) {
  let box = '┏';
  for (let index = 0; index < message.length; index += 1) {
    box += '━';
  }

  box += '┓\n┃' + message + '┃\n┗';

  for (let index = 0; index < message.length; index += 1) {
    box += '━';
  }
  box += '┛\n';

  return box;
}

function rollDice() {
  let diceValue = 0;

  for (let noOfTimes = 0; noOfTimes < 500; noOfTimes += 20) {
    for (let counter = 0; counter < noOfTimes * 1000000; counter += 1) {
    }

    console.clear();
    diceValue = dice();
    console.log(createMessageBox("Snake 🐍 And Ladder 🪜"));
    console.log(printDice(diceValue));
  }

  return diceValue;
}

function playerPosMessage(updatedPlayerPos, currentPlayerPos, diceValue) {
  if (updatedPlayerPos < currentPlayerPos) {
    console.log(createMessageBox("Ohh noo 😱.... 🐍 A snake bite you.."));
  }
  if (updatedPlayerPos > currentPlayerPos) {
    console.log(createMessageBox("Hurray 🙌.... 🪜 You climbed a ladder.."));
  }
  if (updatedPlayerPos === currentPlayerPos) {
    console.log(createMessageBox("Moved Forward by " + diceValue + "...😊"));
  }
}

function updatePosition(currentPlayerPos, playerNumber) {
  const diceValue = rollDice();

  currentPlayerPos += currentPlayerPos + diceValue <= 100 ? diceValue : 0;
  const updatedPlayerPos = snakeOrLadder(currentPlayerPos);

  playerPosMessage(updatedPlayerPos, currentPlayerPos, diceValue);
  console.log(playerNumber + " Current Position is: " + updatedPlayerPos);

  return updatedPlayerPos;
}

function didPlayerWin(p1Position, p2Position, p3Position, p4Position) {
  return p1Position === 100 || p2Position === 100 || p3Position === 100 || p4Position === 100;
}

function whoWon(p1Position, p2Position, p3Position, p4Position) {
  if (p1Position === 100) { return '🥳 Player 1 Won.. 🎊\n'; }
  if (p2Position === 100) { return '🥳 Player 2 Won.. 🎊\n'; }
  if (p3Position === 100) { return '🥳 Player 3 Won.. 🎊\n'; }
  if (p4Position === 100) { return '🥳 Player 4 Won.. 🎊\n'; }
}

function startPlay() {
  let p1Position = 1;
  let p2Position = 1;
  let p3Position = 1;
  let p4Position = 1;

  console.log(createMessageBox("Snake 🐍 And Ladder 🪜 "));

  const noOfPlayer = +prompt("Enter No Of Players : ", '1');
  let value = 1;

  while (!didPlayerWin(p1Position, p2Position, p3Position, p4Position)) {
    prompt("Player " + value + "'s turn");

    if (value === 1) {
      p1Position = updatePosition(p1Position, "Player 1");
    }
    if (value === 2) {
      p2Position = updatePosition(p2Position, "Player 2");
    }
    if (value === 3) {
      p3Position = updatePosition(p3Position, "Player 3");
    }
    if (value === 4) {
      p4Position = updatePosition(p4Position, "Player 4");
    }
    value = value === noOfPlayer ? 1 : value + 1;
  }

  return whoWon(p1Position, p2Position, p3Position, p4Position);
}

console.log(startPlay());