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

function App() {
    const [amenities, setAmenities] = useState([]);
    const [accoms, setAccoms] = useState([]);

    const [location, setLocation] = useState('Singapore');
    const [price, setPrice] = useState([0, 500]);
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
        accomsService.getAccoms(input).then((accom) => {
            setAccoms(accom)
        })
    }


    const onSubmitSearch = () => {
        const accomsInput = {
            destination: location,
            minPrice: price[0],
            maxPrice: price[1],
            sortBy: sortBy,
            accommodationType: accomType,
            amenities: selectedAmenities
        }
        getAccomsRecommendations(accomsInput)
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
                                <SearchComponent 
                                    amenities={amenities}
                                    onSubmitSearch={onSubmitSearch}
                                    setLocation={setLocation}
                                    setPrice={setPrice}
                                    setSortBy={setSortBy}
                                    setAccomType={setAccomType}
                                    setSelectedAmenities={setSelectedAmenities}
                                />
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
