import React from "react";



function Login() {
  return (
    <body>
    <header>
        <div>
            
            <h1 >
                <b><i><u>Paw Prints  Sign up</u></i></b>
            </h1>
        </div>

    </header>
    <div>
        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                <div class="medium-6 cell">
                        <label>Name
                            <input type="text" placeholder="Name"></input>
                        </label>
                    </div>
                    <div class="medium-6 cell">
                        <label>Email
                            <input type="text" placeholder="Email"></input>
                        </label>
                    </div>
                    <div class="medium-6 cell">
                    </div>
                    <div class="medium-6 cell">
                        <label>Password
                            <input type="text" placeholder="Password"></input>
                        </label>
                    </div>
                    <div class="medium-6 cell">
                        <label>Phone Number
                            <input type="text" placeholder="Phone Number"></input>
                        </label>
                    </div>
                    <div class="medium-6 cell">
                        <label>City
                            <input type="text" placeholder="City"></input>
                        </label>
                    </div>
                    <div class="medium-6 cell">
                        <label>State
                            <input type="text" placeholder="State"></input>
                        </label>
                    </div>
                    <div class="medium-6 cell">
                        
                            <button type="submit" >Log In</button>
                        
                    </div>

                </div>
            </div>
        </form>
    </div>
</body>

  );
}

export default Login;
