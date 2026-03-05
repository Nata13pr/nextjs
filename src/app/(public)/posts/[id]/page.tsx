import {Metadata} from "next";
import {FC} from "react";
import {posts} from "@/data/posts";


type Props = {
    params: { id: string }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'Post page title' + id
    }
}

const PostPage: FC<Props> = async ({params}) => {
    const {id} = await params;
    const post = posts.find(c => c.id === Number(id));

    if (!post) return <div>Comment not found</div>;
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            <header style={{ marginBottom: '30px' }}>
                <span style={{ color: '#888', textTransform: 'uppercase', fontSize: '12px' }}>Post ID: {post.id}</span>
                <h1 style={{ fontSize: '2.5rem', marginTop: '10px', color: '#111' }}>{post.title}</h1>
            </header>

            <section style={{ fontSize: '1.1rem', color: '#333', background: '#fdfdfd', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <p>{post.body}</p>
            </section>

            <footer style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <p><b>Written by User:</b> {post.userId}</p>
            </footer>
        </div>
    )
}
export default PostPage;