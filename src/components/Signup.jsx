import React from "react";

function Signup () {
    return(
        <div>
            <div className="signup">
                <div className="container">
                    <h1>Sign up</h1>
                    <form action="" method="post" className="auth_form">
                        <div className="auth_form_group">
                            <label>Name</label>
                            <input type="text" name="" id="" placeholder="Enter your Name"/>
                        </div>
                        <div className="auth_form_group">
                            <label>Gander</label>
                            <input type="text" name="" id="" placeholder="Enter your Gender"/>
                        </div>
                        <div className="auth_form_group">
                            <label>Email</label>
                            <input type="email" name="" id="" placeholder="Enter your Email"/>
                        </div>
                        <div className="auth_form_group">
                            <label>Password</label>
                            <input type="password" name="" id="" placeholder="Enter your Password"/>
                        </div>
                        <div className="auth_form_group">
                            <label>Confirm Password</label>
                            <input type="password" name="" id="" placeholder="Enter your Comfirm Password"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;