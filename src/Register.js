const Register = () => {
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <img src="/images/kbc.png" alt=""/>
                            <h1> User Registration </h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Username <span className="errmsg">*</span></label>
                                        <input className="form-control" placeholder = "Enter  username"></input>
                                    </div>

                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Work Email <span className="errmsg">*</span></label>
                                        <input className="form-control" placeholder = "Enter your work email"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone Number <span className="errmsg">*</span></label>
                                        <input className="form-control" placeholder = "Enter your Phone Number"></input>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Department <span className="errmsg">*</span></label>
                                        <select className="form-control">
                                            <option value="Select">Select</option>
                                            <option value="TV Programme">TV Programme</option>
                                            <option value="Radio Programme">Radio Programme</option>
                                            <option value="Editing">Editing</option>
                                            <option value="Procurement">Procurement</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Password <span className="errmsg">*</span></label>
                                        <input type ="password" className="form-control" placeholder = "Enter a password"></input>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Confirm Password <span className="errmsg">*</span></label>
                                        <input type ="password" className="form-control" placeholder = "Enter a password"></input>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success">Register</button> |
                            <a className="btn btn-danger" href="home">Back</a>
                            <br></br>
                            <p>Do you have an account?
                                <a className="btn btn-warning" type="submit" href="Login">Log In</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>  
    );
}

export default Register;