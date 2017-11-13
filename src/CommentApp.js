import React , {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css';



class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comment: []
    }
  }
  Comment(comment) {
    this.state.comment.push(comment);
    this.setState ({comment: this.state.comment});
  }
  render() {
    return (
      <div className="wrapper" >
        <CommentInput onSubmit={this.Comment.bind(this)} />
        <CommentList comments={this.state.comment} />
      </div>
    )
  }
}



export default CommentApp;
