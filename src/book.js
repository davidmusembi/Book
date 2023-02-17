import './App.css';

const book = () => {
    
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <img src="/images/kbc.png" alt=""/>
                            <h1> Booking form </h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Programme Title <span className="errmsg">*</span></label>
                                        <input className="form-control" placeholder = "Enter Programme title"></input>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Topic <span className="errmsg">*</span></label>
                                        <input className="form-control" placeholder = "Enter Topic"></input>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Producer Name <span className="errmsg">*</span></label>
                                        <input className="form-control" placeholder = "Enter producer name"></input>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Editing Date<span className="errmsg">*</span></label>
                                        <input type="date" className="form-control" placeholder = "Enter editing date"></input>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Editing time  from <span className="errmsg">*</span></label>
                                        <input type="time" id="appt" name="appt"min="07:00" max="20:00"className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Editing time  to<span className="errmsg">*</span></label>
                                    <input type="time" id="appt" name="appt" min="07:00" max="20:00"className="form-control"></input>
                                </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label> Special Remarks <span className="errmsg"></span></label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success" id="book">Book</button>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>  
    );
}

export default book;