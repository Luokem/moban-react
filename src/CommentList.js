import React , {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  static defaultPrps ={
    comments: []
  }

  render() {

    return(
    <div>
      {this.props.comments.map( (e, i) => {
        return <Comment key={i} comment={e} />
      })}
    </div>
  )
  }
}

export default CommentList;
