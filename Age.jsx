import React from "react";
import './Styles/Age.css';

const Studentlist= [
    {name:'priya', age:21, city:'dholpur', course:'FSWD'},
    {name:'priti', age:22, city:'murena', course:'FSWD'},
    {name:'sanjay', age:18, city:'gwalior', course:'cloud'},
    {name:'vaishnvi', age:17, city:'dholpur', course:'BCA'},
    {name:'aarv', age:16, city:'bari', course:'GNM'},
];

export default function Age(){
    return(
        <>
    <div className="div1">
      <h1>Students Table</h1>
      <table border={1} >
        <thead style={{border:"1px solid black"}}>
          <tr>
            <th >Name</th>
            <th >Age</th>
            <th >City</th>
            <th >Course</th>
            <th >Availability</th>
          </tr>
        </thead>
        <tbody >
          {Studentlist.map((value, key) => {
            return (
              <tr key={key}  >
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.city}</td>
                <td>{value.course}</td>
                <td><button type="button" class="btn btn-link" id="btn"
                 onClick={(e)=>{
                    if(value.age>=18){ alert('You are old enough to code');  }
                    else{ alert('You are not old enough to code'); }
                 }}>
                    Check here</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
        </>
    )
}