// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.logo}>Gym Management App</h1>
                <nav className={styles.nav}>
                    <Link to="/login" className={styles.navLink}>Login</Link>
                    <Link to="/register" className={styles.navLink}>Register</Link>
                </nav>
            </header>

            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h2>Streamline Your Gym Operations</h2>
                    <p>Effortlessly manage members, subscriptions, and staff with our all-in-one gym management platform.</p>
                    <Link to="/register" className={styles.heroButton}>Get Started</Link>
                </div>
                <div className={styles.heroImage}>
                    <img src="/images/gym-hero.png" alt="Gym Management" />
                </div>
            </section>

            <section className={styles.features}>
                <h3>Why Choose Us?</h3>
                <div className={styles.featureList}>
                    <div className={styles.feature}>
                        <img src="/images/members.svg" alt="Member Management" />
                        <h4>Member Management</h4>
                        <p>Track and manage member information effortlessly.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src="/images/subscriptions.svg" alt="Subscriptions" />
                        <h4>Subscription Plans</h4>
                        <p>Create and manage subscription plans with ease.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src="/images/reports.svg" alt="Reports" />
                        <h4>Analytics & Reports</h4>
                        <p>Gain insights with detailed reports and analytics.</p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>© 2025 Gym Management App. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
