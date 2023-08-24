// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, resetGame} = props

  let imageLogo
  let winLoseText
  let scoreText

  if (score === 12) {
    imageLogo = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    winLoseText = 'You Won'
    scoreText = 'Best Score'
  } else {
    imageLogo = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    winLoseText = 'You Lose'
    scoreText = 'Score'
  }

  const onClickReset = () => {
    resetGame()
  }

  return (
    <div className="result-display-container">
      <div className="result-text">
        <h1 className="result-type">{winLoseText}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="reset-button" onClick={onClickReset}>
          Play Again
        </button>
      </div>
      <img className="win-lose-logo" src={imageLogo} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
