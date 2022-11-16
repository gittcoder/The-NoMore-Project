import React from "react";
import combine from "../images/combine2.png"

function DivOne(){
return(
<div className="start-section">
    <table>
        <tbody>
        <tr>
<td width="50%" className="tdstart"><h1><p>Welcome</p>
<p>To Our Website !</p>
</h1>
<h2>No More !</h2>

<p>* scrolling down through emails for events</p>

<p>* roaming around SJT to search for empty classes</p>

<p>*waiting to play your favourite sport.</p>

</td><td width="50%" className="tdstart">
    
<img src={combine} className="start-img" alt=""></img>
    
    </td>

</tr>
</tbody>
</table>
</div>
);
}

export default DivOne;