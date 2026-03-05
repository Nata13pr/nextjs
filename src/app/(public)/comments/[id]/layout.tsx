import {ReactNode} from "react";

type Props={
    children: ReactNode
}

const CommentLayout=({children}:Props)=>{
    return(
        <>
            {children}
        </>
    )
}
export default CommentLayout;