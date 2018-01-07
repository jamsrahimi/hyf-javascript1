
  'use strict';

  const board = [
    ['T', 'T', '.', 'F'],
    ['T', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['R', '.', '.', 'W']
  ];

  const robot = {
    x: 0,
    y: 0,
    dir: 'up',
  };

  let flagReached = false;
  let moves = 0;

  board.reverse();
    function render(){
        for (let row = board.length - 1; row >= 0; row--) {
            const cells = board[row];
            let line = '';
            for (let col = 0; col < cells.length; col++){
                line += ' ' + cells[col] + ' ';
            }
            console.log(cells);
        }
}
render();