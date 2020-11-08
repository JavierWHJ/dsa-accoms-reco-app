import React from 'react';
import { Card } from 'antd';

const AccomodationCard = () => {
    return (
        <Card
            style={{ width: 300 }}
            cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
            }
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
}

export default AccomodationCard;
