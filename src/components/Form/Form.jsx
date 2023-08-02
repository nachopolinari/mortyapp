import { useState } from "react";

const Form = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value}
        )
    }

    return (
        <div>
            <form action="">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                <hr />

                <label htmlFor="password">Password: </label>
                <input type="text" name="password" value={userData.password} onChange={handleChange}/>
                <hr />

                <button type="submit">Submit</button>

            </form>
        </div>
    )
};

export default Form;