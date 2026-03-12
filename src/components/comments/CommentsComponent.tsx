import Link from "next/link";
import {getAllComments} from "@/services/api.comments.service";

const CommentsComponent = async () => {
    const comments = await getAllComments()

    return (
        <ul style={{padding: '20px'}}>
            {comments.map((comment) => (
                <li key={comment.id} style={{marginBottom: '10px'}}>
                    <Link
                        href={{pathname: '/comments/' + comment.id.toString(), query: {data: JSON.stringify(comment)}}}
                        style={{color: 'lightblue', textDecoration: 'none'}}>
                        {comment.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default CommentsComponent;