import Post from '../model/Post';
import './PostInList';

interface Props{
    post:Post;
    onDelete?:() => void;
}
function PostInList({post, onDelete}:Props){
    let title = post.title;
    let thought = post.thought;

    return (
        <div className="PostInList">
            <h3>{title}</h3>
            <p>{thought}</p>
            <button onClick={onDelete}>Delete</button>
            <span className="material-icons-outlined">delete</span>
        </div>
    )
}
export default PostInList;