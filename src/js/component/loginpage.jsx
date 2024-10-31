import React from "react";




const Login = (props) => {

    const verify = () => {
        if (props.registeredUsers.find((regUser) => regUser.user == props.user && regUser.password == props.password)) {
            props.setLoggedIn(true)
        } else {
            alert("username or password incorrect")
        }
    }




    return (
        <div id="portal">
            <input id="username" placeholder="username" onChange={(e) => props.setUser(e.target.value)} value={props.user} onKeyUp={(e) => {
                if (e.key === "Enter") {
                    verify()
            }}}/>
            <input id="password" placeholder="password" onChange={(e) => props.setPassword(e.target.value)} value={props.password}onKeyUp={(e) => {
                if (e.key === "Enter") {
                    verify()
            }}}/>
            <span id="submit" className="btn btn-primary" onClick={() => {
                verify()
            }}>Login</span>
            <span className="credentials">Usernames are danielta, George, Derek, Marjorie </span>
            <span className="credentials">Passwords are 1234, 5678, password, passphrase</span>
        </div>
    )
}

export default Login;