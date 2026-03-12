import Link from "next/link";

const Menu = () => {
    return (
        <nav style={{
            background: '#1a1a1a',
            padding: '15px 20px',
            borderRadius: '8px',
            marginBottom: '20px'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                gap: '25px',
                margin: 0,
                padding: 0
            }}>
                <li>
                    <Link href='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                    <Link href='/users' style={{ color: 'white', textDecoration: 'none' }}>Users</Link>
                </li>
                <li>
                    <Link href='/comments' style={{ color: 'white', textDecoration: 'none' }}>Comments</Link>
                </li>
                <li>
                    <Link href='/posts' style={{ color: 'white', textDecoration: 'none' }}>Posts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;