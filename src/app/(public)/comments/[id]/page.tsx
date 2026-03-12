import {Metadata} from "next";
import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/models/IComment";
import {parseParamData} from "@/services/helpers/param.helper";


type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'Comment page title' + id
    }
}

const CommentPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    const comment = parseParamData<IComment>(data);

    if (!comment) return <div>Comment not found</div>;

    return (
        <div style={{padding: '20px', maxWidth: '600px', fontFamily: 'sans-serif'}}>
            <h1 style={{color: '#0070f3'}}>Comment Details</h1>
            <p><strong>Post ID:</strong> {comment.postId}</p>
            <p><strong>Comment ID:</strong> {comment.id}</p>
            <hr/>

            <div style={{background: '#f4f4f4', padding: '20px', borderRadius: '8px', color: '#333'}}>
                <h2 style={{marginTop: 0}}>{comment.name}</h2>
                <p><strong>By:</strong> <span style={{color: 'blue'}}>{comment.email}</span></p>
                <p style={{fontStyle: 'italic', lineHeight: '1.5'}}>{`"${comment.body}"`}</p>
            </div>
        </div>
    )
}
export default CommentPage;