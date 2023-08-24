/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], score: 0, topScore: 0, winOrLose: false}

  checkEmoji = id => {
    const {clickedEmojiList, score, topScore} = this.state
    if (clickedEmojiList.includes(id)) {
      this.setState({winOrLose: true})
      if (score > topScore) {
        this.setState({topScore: score})
      }
    } else {
      this.setState(preState => ({
        clickedEmojiList: [...preState.clickedEmojiList, id],
        score: preState.score + 1,
      }))
    }
  }

  resetGame = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({
        clickedEmojiList: [],
        score: 0,
        topScore: score,
        winOrLose: false,
      })
    } else {
      this.setState({clickedEmojiList: [], score: 0, winOrLose: false})
    }
  }

  render() {
    const {clickedEmojiList, score, topScore, winOrLose} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const newEmojiList = shuffledEmojisList()

    let renderResult

    if (winOrLose === true || score === 12) {
      renderResult = <WinOrLoseCard score={score} resetGame={this.resetGame} />
    } else {
      renderResult = newEmojiList.map(eachItem => (
        <EmojiCard
          key={eachItem.id}
          emojisList={eachItem}
          checkEmoji={this.checkEmoji}
        />
      ))
    }

    return (
      <div className="app-bg-container">
        <NavBar
          clickedEmojiList={clickedEmojiList}
          score={score}
          topScore={topScore}
          winOrLose={winOrLose}
        />
        <div className="emoji-card-container">
          <ul>{renderResult}</ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
