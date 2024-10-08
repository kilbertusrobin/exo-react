import React from 'react';

const Grid = (props) => {
  const { word, difficulty, attempts, letterStates, currentWord, currentRow } = props;
  let nbRow = 0;

  if (difficulty === 'easy') {
    nbRow = 8;
  } else if (difficulty === 'medium') {
    nbRow = 6;
  } else if (difficulty === 'hard') {
    nbRow = 4;
  }

  const nbCol = word.length;

  const getBackgroundColor = (rowIndex, colIndex) => {
    if (rowIndex < attempts.length) {
      return letterStates[rowIndex][colIndex] === 'correct' ? 'green'
        : letterStates[rowIndex][colIndex] === 'present' ? 'orange'
          : 'red';
    }
    return '';
  };

  return (
    <table>
      <tbody>
        {[...Array(nbRow)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(nbCol)].map((_, colIndex) => (
              <td
                key={colIndex}
                style={{ backgroundColor: getBackgroundColor(rowIndex, colIndex) }}
              >
                {rowIndex < attempts.length ? attempts[rowIndex][colIndex] :
                  rowIndex === currentRow && colIndex < currentWord.length ? currentWord[colIndex] : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
