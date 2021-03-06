import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    //fetch data
    useEffect(() => {
        fetch(`https://powerful-island-24401.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices]
};

export default useServices;