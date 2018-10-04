import React, { Component } from 'react'

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: []
    }
  }
  componentWillMount() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ post: data }))
  }
  render() {
    const postItems = this.state.post.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <br />
      </div>
    ))
    return(
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    )
  }
}

export default Post
