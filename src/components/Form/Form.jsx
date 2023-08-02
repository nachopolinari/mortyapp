import { useState } from "react";
import validation from "../validation";

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({})


    const handleChange = (event) => {
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
        setUserData({ ...userData, [event.target.name]: event.target.value })

    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        login(userData);

    }


    return (
        <div>
            <form action="">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} />

                {errors.email1 ? (<p>{errors.email1}</p>)
                    : errors.email2 ? (<p>{errors.email2}</p>)
                        : (<p>{errors.email3}</p>)
                }

                <hr />

                <label htmlFor="password">Password: </label>
                <input type="text" name="password" value={userData.password} onChange={handleChange} />

                {errors.password1 ? <p>{errors.password1}</p> : (<p>{errors.password2}</p>)}

                <hr />

                <button type="submit" onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    )
};

export default Form;