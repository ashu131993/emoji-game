// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, winOrLose} = props

  let renderScore = (
    <div className="score-container">
      <p className="score-count">Score: {score}</p>
      <p className="score-count">Top Score: {topScore}</p>
    </div>
  )
  if (score === 12 || winOrLose === true) {
    renderScore = <div className="score-container" />
  }
  // console.log(score)
  return (
    <nav className="nav-bg-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h3 className="logo-heading">Emoji Game</h3>
      </div>
      {renderScore}
    </nav>
  )
}

export default NavBar
