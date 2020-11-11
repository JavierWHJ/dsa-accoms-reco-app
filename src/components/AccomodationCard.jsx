import React from 'react';
import { Card, Tag } from 'antd';
import Rating from 'react-rating';

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
            <h4 style={{margin: "0px", color: "grey"}}>{props.accom.location}</h4>
            <h1 style={{margin: "0px"}}>{props.accom.name}</h1>
            <h4 style={{margin: "0px"}}>${props.accom.price}/Night</h4>
            <h4 style={{margin: "0px"}}>{props.accom.type}</h4>
            <Rating
                initialRating={props.accom.rating}
                readonly
                emptySymbol={<img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-star-thin.png" className="icon" width="12px" height="12px" alt="empty"/>}
                fullSymbol={<img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-3.png" className="icon" width="12px" height="12px" alt="full"/>}
            />
            <br/>
            <br/>
            {Object.keys(props.accom).map((key) => {
                return props.accom[key] === true ? <Tag>{key}</Tag> : ''
            })}
        </Card>
    );
}

export default AccomodationCard;
