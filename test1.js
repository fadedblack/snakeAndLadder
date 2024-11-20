function printDice1() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃        ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃        ┃\n';
  box += '┗━━━━━━━━┛\n';

  return box;
}

function printDice2() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤      ┃\n';
  box += '┃        ┃\n';
  box += '┃     ⬤  ┃\n';
  box += '┗━━━━━━━━┛\n';

  return box;
}

function printDice3() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃⬤       ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃      ⬤ ┃\n';
  box += '┗━━━━━━━━┛\n';

  return box;
}

function printDice4() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┃        ┃\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┗━━━━━━━━┛\n';

  return box;
}

function printDice5() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┃   ⬤    ┃\n';
  box += '┃ ⬤   ⬤  ┃\n';
  box += '┗━━━━━━━━┛\n';

  return box;
}

function printDice6() {
  let box = '┏━━━━━━━━┓\n';
  box += '┃⬤  ⬤  ⬤ ┃\n';
  box += '┃        ┃\n';
  box += '┃⬤  ⬤  ⬤ ┃\n';
  box += '┗━━━━━━━━┛\n';

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

for (let noOfTimes = 0; noOfTimes < 5000; noOfTimes += 20) {
  for (let counter = 0; counter < 10000000; counter += 1) {
  }
  if (noOfTimes % 20 === 0) {
    console.clear();
    console.log(printDice(dice()));
  }
}
// console.log(printDice5());

