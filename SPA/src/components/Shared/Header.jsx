import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>                            
                            <Link className='navbar-brand' to={'/'}>React flux sample</Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to={'/about'}>About</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}