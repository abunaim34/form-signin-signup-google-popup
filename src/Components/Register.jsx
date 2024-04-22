import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash  } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [succes, setSucces] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        setError('')
        setSucces('')

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSucces("Registestion successfully")
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.error(error);
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
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-3">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
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

export default Register;