import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import AccomodationCard from './AccomodationCard';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const AccomodationsComponent = (props) => {
    return (
        <div style={{height: "100vh", background: "#FFFFFF"}}>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                <div>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Button>Amenities</Button>
                    </Dropdown>
                </div>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {props.accoms.map((accom) => {
                        return <AccomodationCard accom={accom}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default AccomodationsComponent;
