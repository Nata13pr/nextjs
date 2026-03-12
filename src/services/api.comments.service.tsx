import {IComment} from "@/models/IComment";

export const getAllComments = async (): Promise<IComment[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())

}