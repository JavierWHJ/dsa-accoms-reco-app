import React, { useState } from 'react';
import styles from './SearchComponent.module.css'

import { Link } from 'react-router-dom';
import { Tag, Input, Select, Button, Dropdown, Menu, Slider } from 'antd'

const SearchComponent = (props) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const { CheckableTag } = Tag;
    const { Option } = Select;

    const marks = {
        0: '$0',
        500: '$500'
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <Slider min={0} max={500} range marks={marks} defaultValue={[0, 500]} style={{margin: '20px', width: '150px'}} />
            </Menu.Item>
        </Menu>
    );


    const handleTagChange = (tag, checked) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        setSelectedTags(nextSelectedTags)
    }

    const handleAccomTypeChange = (value) => {
        console.log(`selected ${value}`);
    }

    const handleSortByChange = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h2 color="#2C2C2C" style={{fontSize: "30px", fontWeight: "600", margin: "0px"}}>Find your ideal accomodation!</h2>
                <p color="#2C2C2C" style={{fontSize: "15px"}}>compares details from 200+ booking sites to help you find the right accomodation for you.</p>
                <div className={styles.inputGroup}>
                    <Input placeholder="Location “Singapore, Malaysia”" />
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

// json input
  // {
  //   Country name
  //   "destination": "dummyLocation",
  //   default 0 if not included
  //   "minPrice": 0,
  //     "maxPrice": 1500,
  //     rating, price, relevance (default: relevance)
  //     "sortBy": "rating",
  //       0 = Hotel, 1 = Airbnb, 2 = both
  //       "accomodationType": 1,
  //       ranked from 1 - 5 (default: Empty)
  //       if less than 5 inputs the rest are empty
  //       "amenities": ["pool", "wifi", "restaurant"]
  // }