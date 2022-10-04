import React from 'react'
import {Link} from 'react-router-dom'

import './nav.css'
import { ReactComponent as Logo } from './Logo.svg';
class Nav extends React.Component {
    render() {
        return <div id='nav'>
            <div id='nav-items'>
                <Logo className='nav-item icon' />
                <Link className='nav-item' to='/'>
                    Home
                </Link>
                <Link className='nav-item' to='/incidentGraph'>
                    Incident Graph
                </Link>
                <Link className='nav-item' to='/form'>
                    Report Incident
                </Link>
                <Link className='nav-item' to='/crime'>
                    Crime Data
                </Link>
                <Link className='nav-item' to='/directory'>
                    Get Help
                </Link>
            </div>
            <Link className='profile nav-item' to='/profile'>
                Settings
            </Link>
        </div>
    }
}

export default Nav