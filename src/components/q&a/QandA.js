import React from 'react';

const QandA = () => {
    return (
    <div>
        <div className='container text-success mt-4'>
            <div>
            <h1 className=' text-center'>BLOG ANSWER</h1>

        
    <div className='p-3'>
            {/* first ans */}
        <h3>1.What is the difference between props and state in ReactJS? </h3> 
        <h5>In ReactJS, both props and state are used to manage data and communicate 
        between components, but they serve different purposes. </h5>
        <p>Props are like instructions that a parent component gives to its child components. Child components can use these instructions to customize their behavior or appearance, but they cannot change the instructions themselves. 
            The parent component can update these instructions as needed.</p>
            <p>State is like a component's memory that it uses to keep track of information that can change over time. It's different from props because a component can update its own state whenever it needs to, without relying on other components. When the state changes, the component will automatically re-render to update the user interface based on the new information. State is usually used to store information that only the component itself needs to
            know about, and isn't important to other components. </p>
    </div>


    </div> 
    </div>
    </div>
    );
};

export default QandA;