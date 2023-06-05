import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {

    const { userId } = useParams();
    const [user, setUser] = useState('');

    useEffect(() => {
    if (userId === '1') {
        setUser('Grimgor Ironhide the plague of the old world');
        }
    },[userId]) ;


    return (
        <div>
            <h2>{user}</h2>
        </div>
    )
};

export default UserDetails;