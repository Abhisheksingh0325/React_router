import React, { useEffect, useState } from 'react';

function Github() {
    const [followers, setFollowers] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/users/Abhisheksingh0325')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFollowers(data);
            })
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {followers.followers}
            <img src={followers.avatar_url} alt="" srcset="" />
        </div>
    );
}

export default Github;
