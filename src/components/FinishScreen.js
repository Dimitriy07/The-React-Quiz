function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage > 20) emoji = "👋";
  if (percentage > 40) emoji = "😒";
  if (percentage > 80) emoji = "🌅";
  if (percentage === 100) emoji = "♨️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
