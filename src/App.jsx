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

const tempData = [
    {
        name: 'hotel A',
        address: '123 ABC Road',
        price: '$500',
        amenities: ['wifi', 'breakfast'],
        rating: '4.3',
    },
    {
        name: 'hotel B',
        address: '123 ABC Road',
        price: '$300',
        amenities: ['wifi'],
        rating: '3.3',
    },
    {
        name: 'hotel C',
        address: '123 ABC Road',
        price: '$800',
        amenities: ['wifi', 'breakfast', 'gym'],
        rating: '5.0',
    },
]

// const amenities = ['wifi', 'breakfast', 'gym', 'pool', 'kitchen', 'tv'];

function App() {
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        getAmenities();
    }, [])

    const getAmenities = () => {
        accomsService.getAmmenitiesList().then((amenity) => {
            setAmenities(amenity)
        })
    }

    const onSubmitSearch = (data) => {
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
                                <AccomodationsComponent accoms={tempData}/>
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
