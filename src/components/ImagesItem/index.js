import './index.css'

const ImagesItem = props => {
  const {imagesList, isThumbClicked} = props
  const lengthOfList = imagesList.length
  const randomNumber = () => Math.ceil(Math.random() * lengthOfList - 1)
  const imageItem = imagesList[randomNumber()]
  const uniqueUrl = isThumbClicked ? imageItem.imageUrl : imagesList[0].imageUrl

  return <img className="main-image" src={uniqueUrl} alt="match" />
}

export default ImagesItem
