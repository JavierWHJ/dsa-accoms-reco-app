import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CarouselComponent from './components/CarouselComponent';

import { Layout, Menu, Button } from 'antd';
import LogoComponent from './components/LogoComponent';
import SearchComponent from './components/SearchComponent';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AccomodationsComponent from './components/AccomodationsComponent';
import accomsService from './services/accomsService';

const { Header, Content, Footer } = Layout;

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

function App() {
    const [amenities, setAmenities] = useState([]);
    const [accoms, setAccoms] = useState([]);

    const [location, setLocation] = useState('Singapore');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const [sortBy, setSortBy] = useState('rating');
    const [accomType, setAccomType] = useState('0');
    const [selectedAmenities, setSelectedAmenities] = useState([]);

    useEffect(() => {
        getAmenities();
    }, [])

    const getAmenities = () => {
        accomsService.getAmmenitiesList().then((amenity) => {
            setAmenities(amenity)
        })
    }

    const getAccomsRecommendations = (input) => {
        accomsService.getAccoms(input).then((accoms) => {
            setAccoms(accoms);
        })
    }


    const onSubmitSearch = (data) => {
        //form submit object and send to service
        console.log(data)
    }

    return (
        <Layout className="layout">
            <Header style={{padding: "0px"}}>
                <LogoComponent/>
                <Menu mode="horizontal" style={{textAlign: "right"}}>
                    <Menu.Item key="1">Accomodations</Menu.Item>
                    <Menu.Item key="2">Bookings</Menu.Item>
                    <Menu.Item key="3"></Menu.Item>
                    <Menu.Item key="4">Sign up</Menu.Item>
                    <Menu.Item key="5"><Button type="primary">Sign in</Button></Menu.Item>
                </Menu>
            </Header>
            <Content>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/accomodations">
                                <AccomodationsComponent accoms={accoms}/>
                            </Route>
                            <Route path="/">
                                <CarouselComponent/>
                                <SearchComponent amenities={amenities} onSubmitSearch={onSubmitSearch}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Content>
            <Footer style={{ textAlign: 'center' }}>AccomsFinder ©2020</Footer>
        </Layout>
    );
}

export default App;
