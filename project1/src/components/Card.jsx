import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            {/* <h1>inefoianfianef</h1> */}
            <img className="card-image" src={props.image} width="200"></img>
            <div className="card-name"><h4>{props.name}</h4></div>
            <a href={props.link} target="_blank"><button className="view-restaurant">View Restaurant</button></a>
        </div>
    )
}

export default Card