let studentScore = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

const calculateStudentScores = (arr = []) => {
  if (arr.length === 0) {
    return {
      totalOddSem: 0,
      totalEvenSem: 0,
      averageOddSem: 0,
      averageEvenSem: 0
    };
  }

  const totalStudentScores = arr.reduce(
    (acc, score, index) => {
      if (index % 2 === 0) {
        acc.oddScore += score;
        acc.oddCount++;
      } else {
        acc.evenScore += score;
        acc.evenCount++;
      }

      if (index === arr.length - 1) {
        acc.oddAverage = acc.oddScore / acc.oddCount;
        acc.evenAverage = acc.evenScore / acc.evenCount;
      }
      return acc;
    },
    {
      oddScore: 0,
      evenScore: 0,
      oddCount: 0,
      evenCount: 0,
      oddAverage: 0,
      evenAverage: 0
    }
  );

  return {
    totalOddSem: totalStudentScores.oddScore,
    totalEvenSem: totalStudentScores.evenScore,
    averageOddSem: totalStudentScores.oddAverage,
    averageEvenSem: totalStudentScores.evenAverage
  };
};

console.log(calculateStudentScores(studentScore));
