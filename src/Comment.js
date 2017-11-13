import  React ,{Component} from 'react';

class Comment extends Component {
  render(){
    return (
      <div className="comment-wrapper">
        <div >
          <span>{this.props.comment.username}</span>:
          <span>{this.props.comment.content}</span>
          <hr />
        </div>

      </div>
    )
  }
}

export default Comment;
