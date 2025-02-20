
import { useLoaderData } from 'react-router-dom';

const Post = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            
        </div>
    );
};

export default Post;