import Link from "next/link";
import {posts} from "@/data/posts";


const PostsPage = () => {
    return (
        <ul style={{ padding: '20px' }}>
            {posts.map((post) => (
                <li key={post.id} style={{ marginBottom: '10px' }}>
                    <Link href={`/posts/${post.id}`} style={{ color: 'lightblue', textDecoration: 'none' }}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default PostsPage;