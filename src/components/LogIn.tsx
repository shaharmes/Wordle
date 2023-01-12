import React, { useContext } from "react";
import '../styles/LogIn.scss';
import { useForm } from 'react-hook-form';
import { navContext } from "../context/NavContext";
import { navType, FormData } from "../hooks/useNav";


export function LogIn() : JSX.Element {

    const { register, handleSubmit} = useForm<FormData>();
    const { setUser, handleCloseLogin } = useContext(navContext) as navType;
  
    const onSubmit = (data: FormData) => {
        localStorage.setItem('user', data.Name);
        setUser(data.Name);
    }

    return (
    <>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <form id="formSign" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name")} className = "mt-3 fadeIn second" type="text" id="login" placeholder="Name"/>
                    <input {...register("Password")} type="text" id="password" className="fadeIn third" placeholder="Password"/>
                    <input type="submit" onClick={handleCloseLogin} className="fadeIn fourth" value="Log In"/>
                </form>
            </div>
        </div>
    </> 
    );
}