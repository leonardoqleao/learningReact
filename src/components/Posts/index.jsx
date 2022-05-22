import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => (

    <div className="posts">
        {posts.map(post => (
            <PostCard post={post} />
        ))}
    </div>
)