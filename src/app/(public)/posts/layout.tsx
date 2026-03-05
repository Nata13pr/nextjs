import type {Metadata} from 'next';
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'PostsLayout metadata'
}

type Props = {
    children: ReactNode
}

const PostsLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
}
export default PostsLayout;