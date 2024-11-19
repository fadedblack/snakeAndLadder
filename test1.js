function createBox(p1, p2, p3, p4) {
  let box = '┏━━━━━━━┓\n';
  box += '┃ ' + p1 + ' ' + p2 + ' ┃\n';
  box += '┃ ' + p4 + ' ' + p4 + ' ┃\n';
  box += '┗━━━━━━━┛\n';

  return box;
}

function createHeader() {
  let heading = '';
  for (let index = 0; index < 8; index += 1) {
    heading += '━━━━┳━━━━';
  }
  return '┏━━━' + heading + '━━━┓';
}

function createBody(p1, p2, p3, p4) {
  let body = '';
  for (let index = 0; index < 4; index += 1) {
    body += '    ┃        ┃    \n';
    body += '    ┃        ┃    ';
  }

  return '┣   ' + body + '   ┫';
}

function createFooter() {
  let footing = '';
  for (let index = 0; index < 8; index += 1) {
    footing += '━━━━┻━━━━';
  }
  return '┗━━━' + footing + '━━━┛';

}


console.log(createHeader());
for (let index = 0; index < 10; index += 1){
  console.log(createBody('p1', 'p2', 'p3', 'p4'));
}
console.log(createFooter());





