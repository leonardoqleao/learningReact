export const PostCard = ({ post }) => (
    <div className='post'>
        <div key={post.id} className="postContent">
            <img className='postPhoto' src={post.photo} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    </div>
)