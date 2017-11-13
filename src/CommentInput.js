import React , {Component} from 'react';


class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      content: ""
    }
  }
  handleUserChange(event) {
    this.setState({username: event.target.value});
  }
  handleContentChange(event) {
    this.setState({content: event.target.value});
  }
  onSubmit() {
      if(this.props.onSubmit){
        this.props.onSubmit({username:this.state.username,content: this.state.content})
      }
      this.setState({username:"", content:""})
  }
  render() {
    return(
    <div className="comment">
      <div className="comment-files">
      <span>username:</span>
      <input value={this.state.username} onChange = {this.handleUserChange.bind(this)} />
      </div>

      <div className="comment-files">
        <span>comment:</span>
        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} />
      </div>
    <div>
      <button onClick={this.onSubmit.bind(this)}>submit</button>
    </div>
    </div>
  )
  }
}

export default CommentInput;
