import {ReactNode} from "react";

type Props={
    children: ReactNode
}

const PostLayout=({children}:Props)=>{
    return(
        <>
            {children}
        </>
    )
}
export default PostLayout;