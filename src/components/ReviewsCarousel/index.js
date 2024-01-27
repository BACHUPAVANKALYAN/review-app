import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewId: 0}

  getReview = reviewsList => {
    const {activeReviewId} = this.state
    const {imgUrl, companyName, description, username} = reviewsList[
      activeReviewId
    ]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props

    if (activeReviewId > 0) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeReviewId} = this.state

    if (activeReviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
    }
  }

  render() {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <button
          data-testid="leftArrow"
          type="button"
          onClick={this.onLeft}
          className="btn"
        >
          <img
            className="arrow"
            alt="left arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          data-testid="rightArrow"
          type="button"
          onClick={this.onRight}
          className="btn"
        >
          <img
            className="arrow"
            alt="right arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
