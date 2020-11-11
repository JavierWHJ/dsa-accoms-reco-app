import React from 'react';
import { Spin } from 'antd';
import AccomodationCard from './AccomodationCard';

const AccomodationsComponent = (props) => {
    return (
        <div style={{ background: "#FFFFFF"}}>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                {props.accoms.length > 0 ? 
                    <>
                        <h1>{props.accoms.length} results</h1>
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            {props.accoms.map((accom) => {
                                return <AccomodationCard accom={accom}/>
                            })}
                        </div>
                    </>
                    : 
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Spin size="large" tip="Loading..."></Spin>
                    </div>
                }
            </div>
        </div>
    );
}

export default AccomodationsComponent;
