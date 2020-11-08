import React from 'react';
import styles from './SearchComponent.module.css'

import { Link } from 'react-router-dom';

const SearchComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h2 color="#2C2C2C" style={{fontSize: "30px", fontWeight: "600", margin: "0px"}}>Find your ideal accomodation!</h2>
                <p color="#2C2C2C" style={{fontSize: "15px"}}>compares details from 200+ booking sites to help you find the right accomodation for you.</p>
                <div className={styles.inputGroup}>
                    <input type="text" placeholder="Location “Singapore, Malaysia”" class="ant-input ant-input-lg pac-target-input" />
                    <input type="date" placeholder="Start Date" class="ant-input ant-input-lg pac-target-input" />
                    <input type="date" placeholder="End Date" class="ant-input ant-input-lg pac-target-input" />
                    <input type="number" placeholder="Number of People" class="ant-input ant-input-lg pac-target-input" />
                    
                    <Link to="/accomodations"><button type="submit" class="ant-btn ant-btn-primary ant-btn-lg"><span>Find Accomodations</span></button></Link>
                </div>
            </div>
        </div>
    );
}

export default SearchComponent;