import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onThumbClicked} = props
  const {thumbnailUrl, category} = eachItem

  const onClicked = () => {
    onThumbClicked(category)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumb-button" onClick={onClicked}>
        <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
