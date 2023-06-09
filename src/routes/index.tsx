import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/loginPage';
import { RegisterPage } from '../pages/registerPage';
import { UserPage } from '../pages/userPage';

export const MainRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="*" element={<Navigate to={"/"}/>}/>
        </Routes>
    )
}