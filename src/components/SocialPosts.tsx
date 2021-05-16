import { useState } from 'react';
import Post from '../model/Post';
import PostForm from './PostForm';
import PostInList from './PostInList';
import './SocialPosts.css';

function SocialPosts(){
    const [form, setForm] = useState(false);
    const [posts, setPosts] = useState<Post[]>([
        {title: "The ducks have made it across the road", 
         thought: "After a long and strenuous treck the Mama duck and her four little ducklings have safely made it back into their home pond."},
        {title: "The Good, The Bad, and The What?!?!", 
         thought: "In a new comedic parody of the old classic western 'The Good, The Bad, and The Ugly', Jeff Bezos will be starring alongside Chris Rock and Jonah Hill."}
    ]);

    function handleDeletePost(index:number):void{
        setPosts(prevPosts => [
            ...prevPosts.slice(0, index),
            ...prevPosts.slice(index +1)
        ]);
    }
    function handleAddPost(post:Post):void{
        setPosts(prevPosts => [...prevPosts, post]);
        setForm(false);
    }
    function openForm(){
        setForm(true);
    }

    return (
        <div className="SocialPosts">
            <h1>Super Relevant News!</h1>
            <button className="SocialPosts-button" onClick={openForm}>Add Thought</button>
            <section>
                {posts.map((post, i) => <PostInList key={i} post={post} onDelete={() => handleDeletePost(i)}/>)}
            </section>
            {form === true && <PostForm onSubmit={handleAddPost} onClose={() => setForm(false)}/>}
        </div>
    )
}
export default SocialPosts;