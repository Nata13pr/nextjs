import {users} from "@/data/users";
import Link from "next/link";

const UsersPage = () => {
    return (
        <ul style={{padding: '20px'}}>
            {users.map((user) => (
                <li key={user.id} style={{marginBottom: '10px'}}>
                    <Link href={`/users/${user.id}`} style={{color: 'lightblue', textDecoration: 'none'}}>
                        {user.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default UsersPage;