import {useForm} from "react-hook-form";
import {UserFormData} from "@/lib/schema";
import {zodResolver} from "@hookform/resolvers/zod";

export default async function Home() {
    const {register, handleSubmit, formState: {errors}} = useForm<UserFormData>(
        {
            resolver: zodResolver
        }
    )

    const onSubmit = async (data: UserFormData) => {
        const res = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify(data),
        })

        const json = await res.json()
        console.log(json)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('name')} placeholder='Name'/>
            </div>
            <div>
                <input {...register('email')} placeholder='Email'/>
            </div>
            <div>
                <input {...register('password')} placeholder='Passsword'/>
            </div>
        </form>
    );
}
