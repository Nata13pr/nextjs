import Link from "next/link";
import {getAllPosts} from "@/services/api.posts.service";

const PostsComponent = async () => {
    const posts = await getAllPosts()

    return (
        <div>
            <ul style={{padding: '20px'}}>
                {posts.map((post) => (
                    <li key={post.id} style={{marginBottom: '10px'}}>
                        <Link href={{pathname: '/posts/' + post.id.toString(), query: {data: JSON.stringify(post)}}}
                              style={{color: 'lightblue', textDecoration: 'none'}}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PostsComponent