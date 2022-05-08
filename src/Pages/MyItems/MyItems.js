import axiosPrivate from '../../api/axiosPrivate';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import './MyItems.css';
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import SingleMyItems from '../../Pages/SingleMyItems/SingleMyItems';

const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;

            try {
                const { data } = await axiosPrivate.get(url);
                setItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signIn')
                }
            }
        }
        getServices();
    }, [user]);

    return (
        <div style={{ height: "90vh" }}>
            {
                items.map(item => <SingleMyItems key={item._id} item={item}></SingleMyItems>)
            }
        </div>
    );
};

export default MyItems;