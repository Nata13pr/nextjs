import {ReactNode} from "react";

type Props={
    children: ReactNode
}

const UserLayout=({children}:Props)=>{
    return(
        <>
            {children}
        </>
    )
}
export default UserLayout;