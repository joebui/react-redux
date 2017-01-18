import React, { Component } from 'react';
import Header from './Shared/Header.jsx';
import Footer from './Shared/Footer.jsx';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <div className="container">
                    <h2>This is Contact page</h2>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Contact;