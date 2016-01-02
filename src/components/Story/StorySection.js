import React from 'react'

export class StorySection extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    // Title
    var title = (
      <div className="text-center h4">{ this.props.storySection.title }</div>
    )

    // Subtitle
    var subtitle
    if (this.props.storySection.subtitle) {
      subtitle = (
       <div className="text-center h6">{ this.props.storySection.subtitle }</div>
     )
    }

    // Body
    var bodyStyle = {
      paddingBottom: '10px'
    }
    var body = (
      <div className="text-center" style={ bodyStyle }>{ this.props.storySection.body }</div>
    )

    var storySectionStyle = {
      margin: "0 auto",
      maxWidth: "450px",
      marginBottom: "10px",
      padding: "10px"
    }
    return (
      <div className="panel panel-warning" style={ storySectionStyle }>
        { title }
        { subtitle }
        { body }
      </div>
    )
  }
}
