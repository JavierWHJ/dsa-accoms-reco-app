import React from 'react';
import { Menu, Spin } from 'antd';
import AccomodationCard from './AccomodationCard';

const AccomodationsComponent = (props) => {
    return (
        <div style={{ background: "#FFFFFF"}}>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    {props.accoms.length > 0 ? props.accoms.map((accom) => {
                        return <AccomodationCard accom={accom}/>
                    }) : <Spin size="large" tip="Loading..."></Spin>}
                </div>
            </div>
        </div>
    );
}

export default AccomodationsComponent;
