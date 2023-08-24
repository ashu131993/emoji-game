// Write your code here.
import './index.css'

const EmojiCard = prop => {
  const {emojisList, checkEmoji} = prop
  const {id, emojiName, emojiUrl} = emojisList

  const onClickCheckEmoji = () => {
    checkEmoji(id)
  }

  return (
    <li>
      <button
        type="button"
        className="card-container"
        onClick={onClickCheckEmoji}
      >
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
