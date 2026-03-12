import {IPost} from "@/models/IPost";

export const getAllPosts = async (): Promise<IPost[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())

}