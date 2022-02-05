//import React, {Component} from 'react';
// //Class Component
// class Body1 extends Component{
//     render() {
//         return <h2>Body contents....</h2>
//     }
// }

import React from "react";

function Body1(props){
        return <div> <p>Body with below value as attribute: <b>{props.mycontent}</b></p></div>
}

export default Body1;