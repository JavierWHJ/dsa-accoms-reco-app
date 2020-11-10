import React from 'react';
import { Card, Tag } from 'antd';

const AccomodationCard = (props) => {
    return (
        <Card
            style={{ width: 300, margin: "20px" }}
            cover={
            <img
                alt="example"
                src="https://imhotel.com/wp-content/uploads/2020/01/CLASSIC-STUDIO-420x300.jpg"
            />
            }
        >
            <h4 style={{margin: "0px", color: "grey"}}>{props.accom.address}</h4>
            <h1 style={{margin: "0px"}}>{props.accom.name}</h1>
            <h4 style={{margin: "0px"}}>{props.accom.price}/Night</h4>
            <h4 style={{margin: "0px"}}>{props.accom.rating}</h4>
            <br/>
            {props.accom.amenities.map(amenity => {
                return <Tag>{amenity}</Tag>
            })}
        </Card>
    );
}

export default AccomodationCard;
