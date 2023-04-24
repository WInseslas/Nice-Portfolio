import React from 'react';

export default function Logout() {

    const handleLogout = () => {

        fetch('http://127.0.0.1:3030/api/user/logout', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
            .then(response => {
                if (!response.status === 200) {
                    throw Error("An error has occurred.")
                }
                return response.json()
            })
            .then(data => console.log(data))
            .catch(error => {
                console.log(error)
            });

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/?logout=success';
    };

    return (
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
    );
}
