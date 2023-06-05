import { Link, Outlet } from 'react-router-dom';

const Users = () => {

    const userId = 1;

    return (
        <>
            <div>
                <h2>Welcome to the user page</h2>

                <Link to={`/users/${userId}`}>Grimgor Ironhide</Link>
            </div>
            <Outlet />
        </>
    )
};

export default Users;