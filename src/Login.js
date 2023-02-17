const Login = () => {
    return (
        <div>
        <div className="offset-lg-3 col-lg-6">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <img src="/images/kbc.png" alt=""/>
                            <h1> Log In </h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label> Username <span className="errmsg">*</span></label>
                                        <input className="form-control" placeholder = "Enter  username"></input>
                                    </div>

                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label> Password <span className="errmsg">*</span></label>
                                        <input type ="password" className="form-control" placeholder = "Enter a password"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success"> Log in </button> |
                            <a className="btn btn-danger" href="home">Back</a>
                            <br></br>
                            <br></br>
                            <p>Don't have an account?
                                <a className="btn btn-warning" type="submit" href="Register">Register</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>  
    );
}

export default Login;