import React, { useState } from "react";
import "./style.css"

const Validate = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const [errorUsername, setErrorUsername] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

    const validate = (e) => {
        e.preventDefault()

        if(username.length > 8) {
            setErrorUsername('')
            setUserColor('green')
        } else {
            setErrorUsername("Username must be 8 letters long.")
            setUserColor('red')
        }

        if(email.includes("@gmail") || email.includes('@yahoo')){
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail('Must use email format')
            setEmailColor('red')
        }

        if(password.length > 8) {
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword('Password should be 8 letters long')
            setPasswordColor('red')
        }

        if(password !== '' && password === confirmPassword){
            setConfirmPassword('')
            setConfirmPasswordColor('green')
        } else {
            setConfirmPassword('Password did not matched')
            setConfirmPasswordColor('red')
        }
    }

    return <>
        <div className="card">
            <div className="card-image"></div>
            <form>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" style={{ borderColor: userColor }} />
                <p className="error">{errorUsername}</p>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ borderColor: emailColor }} />
                <p className="error">{errorEmail}</p>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ borderColor: passwordColor }} />
                <p className="error">{errorPassword}</p>
                <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" style={{ borderColor: confirmPasswordColor }} />
                <p className="error">{errorConfirmPassword}</p>

                <button className="submit-btn" onClick={validate}>Submit</button>
            </form>
        </div>
    </>
}

export default Validate;