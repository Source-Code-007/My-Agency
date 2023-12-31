import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = ({children}) => {
    const location = useLocation()
    useEffect(()=>{
        const pathName = location.pathname.split('/')[1]
        window.document.title = `My Agency ${pathName && ` | ${pathName}`}`
    }, [location])
    return children

};

export default DynamicTitle;