import React, { Component } from 'react'

class Postform extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value  })
  }

  render() {
    return(
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label>
            <input type="text" name="title" onChange={this.onChange} value={this.state.value} />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <textarea style={{borderColor: 'black'}} name="body" onChange={this.onChange} value={this.state.boby} />
          </div>
          <br />
          <button type="submit">Submitt</button>
        </form>
      </div>
    )
  }
}

export default Postform
