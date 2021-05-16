import { FormEvent, useState } from 'react';
import Post from '../model/Post';
import './PostForm.css';
import PostInList from './PostInList';

interface Props{
    onSubmit:(post:Post) => void;
    onClose:() => void;
}

function PostForm({onSubmit, onClose}:Props){
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");

    function handleSubmit(e:FormEvent){
        e.preventDefault();

        const post:Post = {
            title: title,
            thought: thought
        }
        onSubmit(post);
    }

    return(
        <form className="PostForm" onSubmit={handleSubmit}>
            <p>
                <label>Title
                    <input type="text" value={title}
                    onChange={e => setTitle(e.target.value)}/>
                </label>
                <label>Thought
                    <input type="text" value={thought}
                    onChange={e => setThought(e.target.value)}/>
                </label>
            </p>
            <p>
                <button type="submit">Add Post</button>
            </p>
            <p>
                <button onClick={onClose}>Back to Thoughts</button>
            </p>
        </form>
    )
}
export default PostForm;