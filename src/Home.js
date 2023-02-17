import React from 'react';
import './App.css';

const WeekTable = () => {
  
        

        
    // };
 
// const currentDate = new Date();
//     const daysOfWeek = ['Mon2', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    
//     const rows = daysOfWeek.map((day, index) => {
//     const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + index);
//     return (
//         <table>
//         <tr  key={day}>
//         <td>{day}</td>
        
//         </tr>
//         <tr  key={day}>
//         <td>{date.toLocaleDateString()}</td>
//             </tr></table>
        
        
    
//     );
// });
    
        
    const currentDate = new Date();
    const daysOfWeek = [];

 
    daysOfWeek.push(new Date());

    for (let i = 1; i <= 6; i++) {
     
        let dates = currentDate.setDate(currentDate.getDate() + 1);
        daysOfWeek.push(new Date(dates));
     }

    const rows = daysOfWeek.map(day => {
            return (
        <table>
            <tr key={day.getTime}>
                {day.toDateString()}
            </tr>
        </table>
    );
});

    return ( 
        <div >
            <img src="/images/kbc.png" alt=""/>
            <div>
                <div class="calendar">
                        <h6 class="head">{rows}</h6>
                </div>
                <table class="table table-light">
                    <thead class="thead-light">
                    </thead>
                    <tbody >
                        <tr>
                            <td colspan="9" class="morn" ><br></br>Morning</td>
                        </tr>
                        <tr>
                            <th scope="row">F<sub>A</sub></th>
                            {/* <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td> */}
                        </tr>
                        <tr>
                            <th scope="row">F<sub>B</sub></th>
                            {/* <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td> */}
                        </tr>
                        <tr>
                            <th scope="row">F<sub>C</sub></th>
                            {/* <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td>
                            <td><button class="btn btn-danger">Book</button></td> */}
                        </tr>
                        <tr>
                            <td colspan="9" class="morn"><br></br>Evening</td>
                        </tr>
                        <tr>
                            <th scope="row">F<sub>A</sub></th>
                            {/* <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td> */}
                        </tr>
                        <tr>
                            <th scope="row">F<sub>B</sub></th>
                            {/* <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td> */}
                        </tr>
                        <tr>
                            <th scope="row">F<sub>C</sub></th>
                            {/* <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td>
                            <td><button class="btn btn-primary">Book</button></td> */}
                        </tr>

                        
                    </tbody>
                    {/* <tbody>{rows}</tbody> */}
                </table>
        </div>
        </div>
        
    );
}

export default WeekTable ;