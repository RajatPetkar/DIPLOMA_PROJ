import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";

function SignIn() {
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    const [value, setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            console.log(data.user);
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("image", data.user.photoURL);
            localStorage.setItem("name", data.user.displayName);
            window.location.reload()
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    },[])

    return (
        <div>
            {value ? <li><button className="dropdown-item bg-danger-soft-hover" onClick={logout}><i className="bi bi-box-arrow-left fa-fw me-2" /> Sign Out</button></li>
                :
                <button className="dropdown-item bg-danger-soft-hover" onClick={handleClick}><i className="bi bi-power fa-fw me-2" />Sign In</button>
            }
        </div>
    );
}
export default SignIn;
