import React, { useState } from 'react';
import styles from './SearchComponent.module.css'

import { Link } from 'react-router-dom';
import { Tag, Input, Select, Button, Dropdown, Menu, Slider } from 'antd'

const amenitiesMap = {
    "AC": "A0",
    "breakfast": "A1",
    "wifi": "A2",
    "gym": "A3",
    "kitchen": "A4",
    "pool": "A5",
    "bar": "A6",
    "freeparking": "A7",
    "balcony": "A8"
}

const SearchComponent = (props) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const { CheckableTag } = Tag;
    const { Option } = Select;

    const handleLocationChange = (value) => {
        props.setLocation(value)
    }

    const onPriceChange = (value) => {
        props.setPrice(value)
    }

    const handleTagChange = (tag, checked) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        setSelectedTags(nextSelectedTags)
        const mappedAmenities = nextSelectedTags.map((selectedTag) => {
            return amenitiesMap[selectedTag]
        })
        props.setSelectedAmenities(mappedAmenities)
    }

    const handleAccomTypeChange = (value) => {
        props.setAccomType(value)
    }

    const handleSortByChange = (value) => {
        props.setSortBy(value)
    }


    const marks = {
        0: '$0',
        500: '$500'
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <Slider min={0} max={500} range marks={marks} defaultValue={[0, 500]} style={{margin: '20px', width: '150px'}} onChange={onPriceChange} />
            </Menu.Item>
        </Menu>
    );

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h2 color="#2C2C2C" style={{fontSize: "30px", fontWeight: "600", margin: "0px"}}>Find your ideal accomodation!</h2>
                <p color="#2C2C2C" style={{fontSize: "15px"}}>compares details from 200+ booking sites to help you find the right accomodation for you.</p>
                <div className={styles.inputGroup}>
                    <Input placeholder="Location “Singapore, Malaysia”" onChange={handleLocationChange} />
                    <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                        <Button>Price per Night</Button>
                    </Dropdown>
                    <Select defaultValue="Select Accommodation Type" style={{ width: 300 }} onChange={handleAccomTypeChange}>
                        <Option value="0">Hotel</Option>
                        <Option value="1">Airbnb</Option>
                        <Option value="2">Both</Option>
                    </Select>
                    <Select defaultValue="Sort By" style={{ width: 150 }} onChange={handleSortByChange}>
                        <Option value="rating">Rating</Option>
                        <Option value="price">Price</Option>
                    </Select>
                    <Link to="/accomodations"><Button type="primary" onClick={props.onSubmitSearch}>Find Accomodations</Button></Link>
                </div>
                <div>
                    <span style={{ marginRight: 8 }}>Amenities:</span>
                    {props.amenities && props.amenities.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => handleTagChange(tag, checked)}
                        style={{border: '1px solid black'}}
                    >
                        {tag}
                    </CheckableTag>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchComponent;