import React, { useContext } from 'react';
import { FirstName, LastName, Age } from "./ContextApi";

const CompB =()=>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const age = useContext(Age);


return (
    <>
       <h1> My name is {fname} {lname}</h1>
       <h1>My age is {age}</h1>
    </>
) 
};

export default CompB;