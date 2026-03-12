import Link from "next/link";
import {getAllUsers} from "@/services/api.users.service";

const UsersComponent = async () => {
    const users = await getAllUsers();

    return (
        <div>
            {
                users.map(user =>
                    <div key={user.id}>
                        <Link href={{pathname: '/users/' + user.id.toString(), query: {data: JSON.stringify(user)}}}
                              style={{color: 'lightblue', textDecoration: 'none'}}>
                            {user.id} {user.name}
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
export default UsersComponent;