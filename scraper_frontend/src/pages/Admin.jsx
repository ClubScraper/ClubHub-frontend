import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = ({token}) => {
    let navigate = useNavigate()

    function handleLogout() {
        sessionStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div>
            <div>Hello Admin</div>
            <button onClick={handleLogout} className="bg-blue-500 hover:bg-gray-700 text-white py-2 px-4 rounded">
                Logout
            </button>
        </div>
    )
}

export default Admin;
