import React from "react";

function desc(props){
    return (<div>
    <h2> {props.heading1}</h2>
    <h3>{props.heading2}</h3>
    {props.descw}
    </div>);
}

export default desc;
