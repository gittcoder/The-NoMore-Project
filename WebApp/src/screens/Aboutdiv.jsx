
import React from "react";
import Desc from "../components/Desc.jsx"
import Img from "../components/Img.jsx"
import vittt from '../images/vit-tt.jpeg';
import '../designs/aboutpagecss.css';
import Footer from "../components/Footer.jsx"
function Aboutdiv(){
    return(
<div class="out-table">
<table class="about-table" >
    <tbody>
<tr class="about-tr">
    <td width="40%" class="about-td">
   <Desc heading1="LOREM IPSUM" heading2="what do we do ?" descw={<div><p>Lorem ipsum dolor sit amet. Sed laboriosam eaque et unde iste et voluptatem amet. Et dicta fugit ut inventore optio aut assumenda molestiae non voluptates voluptatem. Et impedit unde in ipsa omnis est magni rerum qui omnis praesentium ut quibusdam.</p>
    <p>
Est numquam expedita id libero exercitationem sed fugit voluptas. Qui dolores dolores qui sunt numquam sit temporibus odio non velit consectetur ea soluta quam qui recusandae iste non tenetur mollitia. </p></div>}></Desc>


    </td>
    <td width="40%" class="about-td">
        <Img adr={vittt} />
    </td>
</tr>
<tr class="about-tr">
<td class="about-td">
<Img adr={vittt} />

</td>
<td class="about-td">
<Desc heading1="LOREM IPSUM" heading2="how do we do ?" descw={<div><p>Lorem ipsum dolor sit amet. Sed laboriosam eaque et unde iste et voluptatem amet. Et dicta fugit ut inventore optio aut assumenda molestiae non voluptates voluptatem. Et impedit unde in ipsa omnis est magni rerum qui omnis praesentium ut quibusdam.</p>
    <p>
Est numquam expedita id libero exercitationem sed fugit voluptas. Qui dolores dolores qui sunt numquam sit temporibus odio non velit consectetur ea soluta quam qui recusandae iste non tenetur mollitia. </p></div>}></Desc>
</td>
</tr>
</tbody>
</table>
<Footer/>

</div>
);
}

export default Aboutdiv;