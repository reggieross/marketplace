import React from 'react';

import styles from "./footer.module.scss";
import {Platform} from "@rbross07/component-lib";
import {SocialLink} from "@rbross07/component-lib";

export const Footer: React.FC = () => {
    return (
        <div className={styles['footer-root']}>
            <div>
                The Marketplace ©2019
            </div>
            <div className={styles['footer-icon-section']}>
                <SocialLink platform={Platform.INSTAGRAM} iconColor={'white'} href={''}/>
                <SocialLink platform={Platform.FACEBOOK} iconColor={'white'} href={''}/>
            </div>
        </div>
    )
};