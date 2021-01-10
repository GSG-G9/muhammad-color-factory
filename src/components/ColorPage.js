import React from "react";
import {Link, withRouter} from 'react-router-dom';

export default function ColorPage({ match }) {
  console.log(match)
  return <div className="Color-page">
    <p></p>
    <Link to='/colors'>Go back</Link>
  </div>;
}

withRouter(ColorPage);
