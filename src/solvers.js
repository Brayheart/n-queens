/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var countOfRooks = 0;
  var board = new Board({n: n});
  //var length = board.attributes.n

  for(var i = 0 ; i < n; i++){
    board.attributes[i][i] = 1;
    countOfRooks += 1;
  };//place rooks onto board

  if (countOfRooks === n && !board.hasAnyColConflicts() && !board.hasAnyRowConflicts()){
    for(var i = 0; i < n; i++){
      solution.push(board.attributes[i]);
    };//pushing into solutions array
  };
                   
  //console.log('Single solution for ' + n + ' roosks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, board, currentRow, countOfRooks) {
  var solutionCount = 0; 
  board = board || new Board({'n': n}); //board is board otherwise is new board with n length
  currentRow = currentRow || 0; //current row starts at 0
  countOfRooks = countOfRooks || 0; //is 0 if undefined

  //base case is placing rook with no conflicts
  if (countOfRooks <  n) {
    for (var colI = 0; colI < n; colI++) {//for loop for column index
      board.attributes[currentRow][colI] = 1;//places rook 
      countOfRooks++;
      currentRow++;//goes down a row
      if (!board.hasAnyRooksConflicts()) {//if no conflicts
        solutionCount = solutionCount + countNRooksSolutions(n, board, currentRow, countOfRooks);
        //first case 0 = 0 + 1, called recursivly 
      }  
      currentRow--;//go up a row
      board.attributes[currentRow][colI] = 0; //unplace rook 
      countOfRooks--;
      
    }
  } else {//if countOfRooks === n 
    solutionCount++
  }
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n, board, currentRow, countOfQueens, matrix) {
  var solutionCount = 0; 
  //var matrix = matrix || [];
  board = board || new Board({'n': n}); //board is board otherwise is new board with n length
  //currentRow = currentRow || 0; //current row starts at 0
  countOfQueens = 0; //is 0 if undefined
  var solution = [];
  
  if (n === 0) {
    return [];
  }

  while(countOfQueens !== n){
    for(var currRow = 0; currRow < n; currRow++){
      for(var currColumn = 0; currColumn < n; currColumn){
        board.attributes[currRow][currColumn] = 1;
        countOfQueens++;
        if(!board.hasAnyQueensConflicts()){
          break;
        }else{
          board.attributes[currRow][currColumn] = 0;
          countOfQueens--;
        }
      }
    }
  }

  console.log(countOfQueens);
  // //base case is placing rook with no conflicts
  // if (countOfQueens < n) {
  //   for (var colI = 0; colI < n; colI++) {//for loop for column index
  //     board.attributes[currentRow][colI] = 1;//places queen  
  //     countOfQueens++;
  //     currentRow++;//goes down a row
  //     if (!board.hasAnyQueensConflicts()) {//if no conflicts
  //       matrix = findNQueensSolution(n, board, currentRow, countOfQueens);
  //       //first case 0 = 0 + 1, called recursivly 
  //     }  
  //     currentRow--;//go up a row
  //     //board.attributes[currentRow][colI] = 0; //unplace queen  
  //     countOfQueens--;
  //   }
  // } else {//if countOfRooks === n 
  //   console.log(board)
  //   for (var i = 0; i < n; i++) {
  //     matrix.push(board.attributes[i])
  //   }
    
  // }
  //console.log('matr', matrix)
  // return matrix;

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n, board, currentRow, countOfQueens) {
  var solutionCount = 0; 
  board = board || new Board({'n': n}); //board is board otherwise is new board with n length
  currentRow = currentRow || 0; //current row starts at 0
  countOfQueens = countOfQueens || 0; //is 0 if undefined

  //base case is placing rook with no conflicts
  if (countOfQueens <  n) {
    for (var colI = 0; colI < n; colI++) {//for loop for column index
      board.attributes[currentRow][colI] = 1;//places queen  
      countOfQueens++;
      currentRow++;//goes down a row
      if (!board.hasAnyQueensConflicts()) {//if no conflicts
        solutionCount = solutionCount + countNQueensSolutions(n, board, currentRow, countOfQueens);
        //first case 0 = 0 + 1, called recursivly 
      }  
      currentRow--;//go up a row
      board.attributes[currentRow][colI] = 0; //unplace queen  
      countOfQueens--;
    }
  } else {//if countOfRooks === n 
    solutionCount++
  }
  
  console.log('Number of solutions for ' + n + ' Queens:', solutionCount);
  return solutionCount;
};
