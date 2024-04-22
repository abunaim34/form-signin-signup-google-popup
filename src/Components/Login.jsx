import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom"



const Login = () => {
    const [error, setError] = useState('')
    const [succes, setSucces] = useState('')
    const { loginUser, signinWithGoogle, fbLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const inpRef = useRef()
    // inpRef.current.focus()


    useEffect(() => {inpRef.current.focus()},[])

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setError('')
        setSucces('')

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                setSucces('Login successfully')
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleGoogle = () => {
        signinWithGoogle()
            .then(result => {
                console.log(result.user);
                setSucces('Login with google succes');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleFacebook = () => {
        fbLogin()
            .then(result => {
                console.log(result.user);
                setSucces('Login with Facebook succes');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={inpRef} type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogle} className="btn btn-ghost">Google</button>
                    <button onClick={handleFacebook} className="btn btn-ghost">Facebook</button>
                    {
                        error && <p className="text-red-600">{error}</p>
                    }
                    {
                        succes && <p className="text-green-600">{succes}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;