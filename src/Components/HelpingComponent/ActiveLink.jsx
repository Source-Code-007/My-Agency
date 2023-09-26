/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive})=> `rounded-none text-xl tracking-widest !bg-transparent hover:text-primary-main focus:bg-transparent text-slate-200 font-bold mx-1 ${isActive? '!text-primary-main' : ''}`}>{children}</NavLink>
    );
};

export default ActiveLink;