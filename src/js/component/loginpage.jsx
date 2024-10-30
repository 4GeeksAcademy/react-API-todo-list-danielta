import React from "react";




const Login = (props) => {
    return (
        <div id="portal">
            <input id="username" placeholder="username" onChange={(e) => props.setUser(e.target.value)} value={props.user}/>
            <input id="password" placeholder="password" onChange={(e) => props.setPassword(e.target.value)} value={props.password}/>
            <span id="submit" className="btn btn-primary"onClick={()=> {
                if (props.user === "Daniel") {
                    if (props.password === "password") {
                        props.setLoggedIn(true)
                    } else {alert("username or password incorrect")
                    }
                } else {alert("Username or password incorrect");
                }}
            }>Login</span>
            <span className="credentials">Username is "Daniel"</span>
            <span className="credentials">Password is "password"</span>
        </div>
    )
}

export default Login;