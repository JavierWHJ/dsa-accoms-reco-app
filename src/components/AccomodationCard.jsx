import React from 'react';
import { Card } from 'antd';

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
            <h2>{props.accom.name}</h2>
            <h4>{props.accom.price}</h4>
            <h4>{props.accom.rating}</h4>
        </Card>
    );
}

export default AccomodationCard;
