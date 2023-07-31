function Score({ score }) {
  return (
    <div className="baseScore">
      <h2 className="titoloScore">
        ROCK<br></br>PAPER<br></br>SCISSORS
      </h2>
      <div className="boxScore">
        <h4>SCORE</h4>
        <span>{score}</span>
      </div>
    </div>
  );
}

export default Score;
