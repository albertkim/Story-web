import React from 'react'
import { Link } from 'react-router';
import { StorySection } from './StorySection'

export class Story extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    var storySections = this.props.story.storySections.map(storySection => {
      return (
        <div>
          <StorySection storySection={ storySection }></StorySection>
        </div>
      )
    })

    var storyStyle = {
      paddingBottom: "10px"
    }
    return (
      <div className="panel panel-success" style={ storyStyle }>
        <div className="text-center h3"><Link to={ "/stories/" + this.props.story.id }>{ this.props.story.title }</Link></div>
        <div className="text-center h4">{ this.props.story.subtitle }</div>
        { storySections }
      </div>
    )
  }
}
