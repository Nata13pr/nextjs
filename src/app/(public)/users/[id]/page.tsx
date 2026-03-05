import {Metadata} from "next";
import {FC} from "react";
import {users} from "@/data/users";



type Props = {
    params: { id: string }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'User page title' + id
    }
}

const UserPage: FC<Props> = async ({params}) => {
    const {id} = await params;
    const userData = users.find(u => u.id === Number(id));

    if (!userData) return <div>User not found</div>;
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
            <h1>User Profile: {userData.name}</h1>
            <p style={{ color: 'gray' }}>Displaying details for ID from URL: {id}</p>
            <hr />

            <section style={{ marginBottom: '20px' }}>
                <h3>General Information</h3>
                <p><b>Username:</b> {userData.username}</p>
                <p><b>Email:</b> {userData.email}</p>
                <p><b>Phone:</b> {userData.phone}</p>
                <p><b>Website:</b> <a href={`https://${userData.website}`} target="_blank" rel="noreferrer">{userData.website}</a></p>
            </section>

            <section style={{ marginBottom: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '8px',color: '#666' }}>
                <h3>Address</h3>
                <p><b>Street:</b> {userData.address.street}</p>
                <p><b>Suite:</b> {userData.address.suite}</p>
                <p><b>City:</b> {userData.address.city}</p>
                <p><b>Zipcode:</b> {userData.address.zipcode}</p>
                <small style={{ color: '#666' }}>
                    Geo-location: lat {userData.address.geo.lat}, lng {userData.address.geo.lng}
                </small>
            </section>
            <section>
                <h3>Company</h3>
                <p><b>Name:</b> {userData.company.name}</p>
                <p><b>Catch Phrase:</b> <i>{`"${userData.company.catchPhrase}"`}</i></p>
                <p><b>Business Strategy:</b> {userData.company.bs}</p>
            </section>
        </div>
    )
}
export default UserPage;