import React from 'react'

export default function ServiceDetails(props) {

    console.log(props);
    return (
        <div>
           {props.match.params.id}
        </div>
    )
}
