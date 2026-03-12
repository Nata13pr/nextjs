import {Metadata} from "next";
import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";
import {parseParamData} from "@/services/helpers/param.helper";


type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'User page title' + id
    }
}

const UserPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;

    const user = parseParamData<IUser>(data)


    if (!user) return <div>User not found</div>;
    return (
        <div style={{padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6'}}>
            <h1>User Profile: {user.name}</h1>
            <p style={{color: 'gray'}}>Displaying details for ID from URL: {user.id}</p>
            <hr/>

            <section style={{marginBottom: '20px'}}>
                <h3>General Information</h3>
                <p><b>Username:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Website:</b> <a href={`https://${user.website}`} target="_blank"
                                      rel="noreferrer">{user.website}</a></p>
            </section>

            <section style={{
                marginBottom: '20px',
                padding: '15px',
                background: '#f9f9f9',
                borderRadius: '8px',
                color: '#666'
            }}>
                <h3>Address</h3>
                <p><b>Street:</b> {user.address.street}</p>
                <p><b>Suite:</b> {user.address.suite}</p>
                <p><b>City:</b> {user.address.city}</p>
                <p><b>Zipcode:</b> {user.address.zipcode}</p>
                <small style={{color: '#666'}}>
                    Geo-location: lat {user.address.geo.lat}, lng {user.address.geo.lng}
                </small>
            </section>
            <section>
                <h3>Company</h3>
                <p><b>Name:</b> {user.company.name}</p>
                <p><b>Catch Phrase:</b> <i>{`"${user.company.catchPhrase}"`}</i></p>
                <p><b>Business Strategy:</b> {user.company.bs}</p>
            </section>
        </div>
    )
}
export default UserPage;