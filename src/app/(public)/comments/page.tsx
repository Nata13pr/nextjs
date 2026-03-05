import Link from "next/link";
import {comments} from "@/data/comments";

const CommentsPage = () => {
    return (
        <ul style={{ padding: '20px' }}>
            {comments.map((comment) => (
                <li key={comment.id} style={{ marginBottom: '10px' }}>
                    <Link href={`/comments/${comment.id}`} style={{ color: 'lightblue', textDecoration: 'none' }}>
                        {comment.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default CommentsPage;