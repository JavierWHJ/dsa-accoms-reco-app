import React from "react";
import styles from './LogoComponent.module.css'

const LogoComponent = () => {
    return (
        <div className={styles.logo}>
            <a aria-current="page" class="active" href="/">
                <h3>AccomsFinder.</h3>
            </a>
        </div>
    );
};

export default LogoComponent;
